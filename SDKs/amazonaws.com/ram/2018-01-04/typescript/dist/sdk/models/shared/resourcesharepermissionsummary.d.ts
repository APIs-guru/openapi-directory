import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a permission that is associated with a resource share.
**/
export declare class ResourceSharePermissionSummary extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    defaultVersion?: boolean;
    isResourceTypeDefault?: boolean;
    lastUpdatedTime?: Date;
    name?: string;
    resourceType?: string;
    status?: string;
    version?: string;
}
