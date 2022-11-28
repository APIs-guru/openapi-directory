import { SpeakeasyBase } from "../../../internal/utils";
import { FlowExecutionStatusEnum } from "./flowexecutionstatusenum";
/**
 * An object that contains summary information about a flow execution.
**/
export declare class FlowExecutionSummary extends SpeakeasyBase {
    createdAt?: Date;
    flowExecutionId?: string;
    flowTemplateId?: string;
    status?: FlowExecutionStatusEnum;
    systemInstanceId?: string;
    updatedAt?: Date;
}
