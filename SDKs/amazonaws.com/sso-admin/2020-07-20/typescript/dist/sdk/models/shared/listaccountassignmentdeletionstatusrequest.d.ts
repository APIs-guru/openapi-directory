import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusFilter } from "./operationstatusfilter";
export declare class ListAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
    filter?: OperationStatusFilter;
    instanceArn: string;
    maxResults?: number;
    nextToken?: string;
}
