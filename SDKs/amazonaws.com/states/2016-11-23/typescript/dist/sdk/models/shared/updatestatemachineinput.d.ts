import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { TracingConfiguration } from "./tracingconfiguration";
export declare class UpdateStateMachineInput extends SpeakeasyBase {
    definition?: string;
    loggingConfiguration?: LoggingConfiguration;
    roleArn?: string;
    stateMachineArn: string;
    tracingConfiguration?: TracingConfiguration;
}
