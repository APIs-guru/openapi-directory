import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";
import { SqlRunConfiguration } from "./sqlrunconfiguration";



// RunConfiguration
/** 
 * Describes the starting parameters for an Kinesis Data Analytics application.
**/
export class RunConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationRestoreConfiguration" })
  applicationRestoreConfiguration?: ApplicationRestoreConfiguration;

  @SpeakeasyMetadata({ data: "json, name=FlinkRunConfiguration" })
  flinkRunConfiguration?: FlinkRunConfiguration;

  @SpeakeasyMetadata({ data: "json, name=SqlRunConfigurations", elemType: SqlRunConfiguration })
  sqlRunConfigurations?: SqlRunConfiguration[];
}
