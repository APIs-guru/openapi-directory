import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { TracingConfiguration } from "./tracingconfiguration";
export declare class DescribeStateMachineForExecutionOutput extends SpeakeasyBase {
    definition: string;
    loggingConfiguration?: LoggingConfiguration;
    name: string;
    roleArn: string;
    stateMachineArn: string;
    tracingConfiguration?: TracingConfiguration;
    updateDate: Date;
}
