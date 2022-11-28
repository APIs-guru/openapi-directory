import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";



export class UpdateLoggingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;
}
