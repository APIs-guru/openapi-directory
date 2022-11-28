import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
/**
 * Contains details about an execution.
**/
export declare class ExecutionListItem extends SpeakeasyBase {
    executionArn: string;
    name: string;
    startDate: Date;
    stateMachineArn: string;
    status: ExecutionStatusEnum;
    stopDate?: Date;
}
