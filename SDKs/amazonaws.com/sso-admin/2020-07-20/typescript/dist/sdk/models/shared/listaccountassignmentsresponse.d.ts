import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignment } from "./accountassignment";
export declare class ListAccountAssignmentsResponse extends SpeakeasyBase {
    accountAssignments?: AccountAssignment[];
    nextToken?: string;
}
