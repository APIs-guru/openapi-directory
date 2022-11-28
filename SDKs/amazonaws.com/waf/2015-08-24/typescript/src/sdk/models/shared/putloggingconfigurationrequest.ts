import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";



export class PutLoggingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration: LoggingConfiguration;
}
