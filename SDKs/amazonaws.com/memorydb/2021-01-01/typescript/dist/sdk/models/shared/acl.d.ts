import { SpeakeasyBase } from "../../../internal/utils";
import { AclPendingChanges } from "./aclpendingchanges";
/**
 * An Access Control List. You can authenticate users with Access Contol Lists. ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.
**/
export declare class Acl extends SpeakeasyBase {
    arn?: string;
    clusters?: string[];
    minimumEngineVersion?: string;
    name?: string;
    pendingChanges?: AclPendingChanges;
    status?: string;
    userNames?: string[];
}
