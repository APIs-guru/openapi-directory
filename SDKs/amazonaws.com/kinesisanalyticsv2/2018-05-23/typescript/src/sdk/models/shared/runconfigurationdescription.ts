import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationRestoreConfiguration } from "./applicationrestoreconfiguration";
import { FlinkRunConfiguration } from "./flinkrunconfiguration";


// RunConfigurationDescription
/** 
 * Describes the starting properties for a Kinesis Data Analytics application.
**/
export class RunConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationRestoreConfigurationDescription" })
  applicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;

  @Metadata({ data: "json, name=FlinkRunConfigurationDescription" })
  flinkRunConfigurationDescription?: FlinkRunConfiguration;
}
