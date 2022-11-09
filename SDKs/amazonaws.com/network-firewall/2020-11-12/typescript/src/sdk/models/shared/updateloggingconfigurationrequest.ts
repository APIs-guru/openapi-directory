import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfiguration } from "./loggingconfiguration";


export class UpdateLoggingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;
}
