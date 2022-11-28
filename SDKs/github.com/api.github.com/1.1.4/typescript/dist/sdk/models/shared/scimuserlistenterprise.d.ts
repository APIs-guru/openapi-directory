import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScimUserListEnterpriseResourcesEmails extends SpeakeasyBase {
    primary?: boolean;
    type?: string;
    value?: string;
}
export declare class ScimUserListEnterpriseResourcesGroups extends SpeakeasyBase {
    value?: string;
}
export declare class ScimUserListEnterpriseResourcesMeta extends SpeakeasyBase {
    created?: string;
    lastModified?: string;
    location?: string;
    resourceType?: string;
}
export declare class ScimUserListEnterpriseResourcesName extends SpeakeasyBase {
    familyName?: string;
    givenName?: string;
}
export declare class ScimUserListEnterpriseResources extends SpeakeasyBase {
    active?: boolean;
    emails?: ScimUserListEnterpriseResourcesEmails[];
    externalId?: string;
    groups?: ScimUserListEnterpriseResourcesGroups[];
    id: string;
    meta?: ScimUserListEnterpriseResourcesMeta;
    name?: ScimUserListEnterpriseResourcesName;
    schemas: string[];
    userName?: string;
}
export declare class ScimUserListEnterprise extends SpeakeasyBase {
    resources: ScimUserListEnterpriseResources[];
    itemsPerPage: number;
    schemas: string[];
    startIndex: number;
    totalResults: number;
}
