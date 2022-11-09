import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfiguration } from "./loggingconfiguration";


export class PutLoggingConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;
}
