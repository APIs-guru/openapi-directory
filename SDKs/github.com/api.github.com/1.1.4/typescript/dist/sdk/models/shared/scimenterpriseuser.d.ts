import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScimEnterpriseUserEmails extends SpeakeasyBase {
    primary?: boolean;
    type?: string;
    value?: string;
}
export declare class ScimEnterpriseUserGroups extends SpeakeasyBase {
    value?: string;
}
export declare class ScimEnterpriseUserMeta extends SpeakeasyBase {
    created?: string;
    lastModified?: string;
    location?: string;
    resourceType?: string;
}
export declare class ScimEnterpriseUserName extends SpeakeasyBase {
    familyName?: string;
    givenName?: string;
}
export declare class ScimEnterpriseUser extends SpeakeasyBase {
    active?: boolean;
    emails?: ScimEnterpriseUserEmails[];
    externalId?: string;
    groups?: ScimEnterpriseUserGroups[];
    id: string;
    meta?: ScimEnterpriseUserMeta;
    name?: ScimEnterpriseUserName;
    schemas: string[];
    userName?: string;
}
