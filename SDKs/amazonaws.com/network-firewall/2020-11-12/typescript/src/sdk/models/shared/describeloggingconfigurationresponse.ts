import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";



export class DescribeLoggingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;
}
