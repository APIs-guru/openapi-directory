import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedManagedPolicy } from "./attachedmanagedpolicy";
export declare class ListManagedPoliciesInPermissionSetResponse extends SpeakeasyBase {
    attachedManagedPolicies?: AttachedManagedPolicy[];
    nextToken?: string;
}
