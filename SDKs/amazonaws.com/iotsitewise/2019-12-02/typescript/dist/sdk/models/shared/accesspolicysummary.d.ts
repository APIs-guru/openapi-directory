import { SpeakeasyBase } from "../../../internal/utils";
import { Identity } from "./identity";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";
/**
 * Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
**/
export declare class AccessPolicySummary extends SpeakeasyBase {
    creationDate?: Date;
    id: string;
    identity: Identity;
    lastUpdateDate?: Date;
    permission: PermissionEnum;
    resource: Resource;
}
