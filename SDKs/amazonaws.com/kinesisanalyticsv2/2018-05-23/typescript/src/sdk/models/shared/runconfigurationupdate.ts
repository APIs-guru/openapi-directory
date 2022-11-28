import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";



// RunConfigurationUpdate
/** 
 * Describes the updates to the starting parameters for a Kinesis Data Analytics application.
**/
export class RunConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationRestoreConfiguration" })
  applicationRestoreConfiguration?: ApplicationRestoreConfiguration;

  @SpeakeasyMetadata({ data: "json, name=FlinkRunConfiguration" })
  flinkRunConfiguration?: FlinkRunConfiguration;
}
