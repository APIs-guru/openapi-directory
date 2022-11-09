import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountAssignmentOperationStatusMetadata } from "./accountassignmentoperationstatusmetadata";
export declare class ListAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
    accountAssignmentsCreationStatus?: AccountAssignmentOperationStatusMetadata[];
    nextToken?: string;
}
