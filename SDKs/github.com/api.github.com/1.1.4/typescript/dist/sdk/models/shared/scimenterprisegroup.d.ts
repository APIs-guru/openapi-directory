import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScimEnterpriseGroupMembers extends SpeakeasyBase {
    dollarRef?: string;
    display?: string;
    value?: string;
}
export declare class ScimEnterpriseGroupMeta extends SpeakeasyBase {
    created?: string;
    lastModified?: string;
    location?: string;
    resourceType?: string;
}
export declare class ScimEnterpriseGroup extends SpeakeasyBase {
    displayName?: string;
    externalId?: string;
    id: string;
    members?: ScimEnterpriseGroupMembers[];
    meta?: ScimEnterpriseGroupMeta;
    schemas: string[];
}
