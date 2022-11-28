import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { StateMachineStatusEnum } from "./statemachinestatusenum";
import { TracingConfiguration } from "./tracingconfiguration";
import { StateMachineTypeEnum } from "./statemachinetypeenum";
export declare class DescribeStateMachineOutput extends SpeakeasyBase {
    creationDate: Date;
    definition: string;
    loggingConfiguration?: LoggingConfiguration;
    name: string;
    roleArn: string;
    stateMachineArn: string;
    status?: StateMachineStatusEnum;
    tracingConfiguration?: TracingConfiguration;
    type: StateMachineTypeEnum;
}
