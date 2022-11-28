import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns the updates being applied to the ACL.
**/
export declare class AclPendingChanges extends SpeakeasyBase {
    userNamesToAdd?: string[];
    userNamesToRemove?: string[];
}
