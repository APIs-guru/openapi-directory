import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";
import { SqlRunConfiguration } from "./sqlrunconfiguration";


// RunConfiguration
/** 
 * Describes the starting parameters for an Kinesis Data Analytics application.
**/
export class RunConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationRestoreConfiguration" })
  applicationRestoreConfiguration?: ApplicationRestoreConfiguration;

  @Metadata({ data: "json, name=FlinkRunConfiguration" })
  flinkRunConfiguration?: FlinkRunConfiguration;

  @Metadata({ data: "json, name=SqlRunConfigurations", elemType: shared.SqlRunConfiguration })
  sqlRunConfigurations?: SqlRunConfiguration[];
}
