import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScimUserEmails extends SpeakeasyBase {
    primary?: boolean;
    value: string;
}
export declare class ScimUserMeta extends SpeakeasyBase {
    created?: Date;
    lastModified?: Date;
    location?: string;
    resourceType?: string;
}
export declare class ScimUserName extends SpeakeasyBase {
    familyName: string;
    formatted?: string;
    givenName: string;
}
export declare enum ScimUserOperationsOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}
export declare class ScimUserOperations extends SpeakeasyBase {
    op: ScimUserOperationsOpEnum;
    path?: string;
    value?: any;
}
/**
 * SCIM /Users provisioning endpoints
**/
export declare class ScimUser extends SpeakeasyBase {
    active: boolean;
    displayName?: string;
    emails: ScimUserEmails[];
    externalId: string;
    groups?: any[];
    id: string;
    meta: ScimUserMeta;
    name: ScimUserName;
    operations?: ScimUserOperations[];
    organizationId?: number;
    schemas: string[];
    userName: string;
}
