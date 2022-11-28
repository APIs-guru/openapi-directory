import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListManagedPoliciesInPermissionSetRequest extends SpeakeasyBase {
    instanceArn: string;
    maxResults?: number;
    nextToken?: string;
    permissionSetArn: string;
}
