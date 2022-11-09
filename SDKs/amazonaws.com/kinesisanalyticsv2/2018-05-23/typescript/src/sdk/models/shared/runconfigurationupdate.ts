import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";


// RunConfigurationUpdate
/** 
 * Describes the updates to the starting parameters for a Kinesis Data Analytics application.
**/
export class RunConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationRestoreConfiguration" })
  applicationRestoreConfiguration?: ApplicationRestoreConfiguration;

  @Metadata({ data: "json, name=FlinkRunConfiguration" })
  flinkRunConfiguration?: FlinkRunConfiguration;
}
