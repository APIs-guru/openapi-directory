import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";



// RunConfigurationDescription
/** 
 * Describes the starting properties for a Kinesis Data Analytics application.
**/
export class RunConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationRestoreConfigurationDescription" })
  applicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;

  @SpeakeasyMetadata({ data: "json, name=FlinkRunConfigurationDescription" })
  flinkRunConfigurationDescription?: FlinkRunConfiguration;
}
