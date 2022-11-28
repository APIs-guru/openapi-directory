import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";



export class GetLoggingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;
}
