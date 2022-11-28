import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
export declare class ListExecutionsInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    stateMachineArn: string;
    statusFilter?: ExecutionStatusEnum;
}
