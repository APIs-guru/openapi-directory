import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountAssignmentOperationStatusMetadata } from "./accountassignmentoperationstatusmetadata";
export declare class ListAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
    accountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusMetadata[];
    nextToken?: string;
}
