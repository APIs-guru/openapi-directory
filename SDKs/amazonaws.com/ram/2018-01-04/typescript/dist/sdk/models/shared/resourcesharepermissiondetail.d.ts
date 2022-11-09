import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about an RAM permission.
**/
export declare class ResourceSharePermissionDetail extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    defaultVersion?: boolean;
    isResourceTypeDefault?: boolean;
    lastUpdatedTime?: Date;
    name?: string;
    permission?: string;
    resourceType?: string;
    version?: string;
}
