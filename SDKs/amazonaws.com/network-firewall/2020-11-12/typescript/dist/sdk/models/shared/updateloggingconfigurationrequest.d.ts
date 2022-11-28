import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
export declare class UpdateLoggingConfigurationRequest extends SpeakeasyBase {
    firewallArn?: string;
    firewallName?: string;
    loggingConfiguration?: LoggingConfiguration;
}
