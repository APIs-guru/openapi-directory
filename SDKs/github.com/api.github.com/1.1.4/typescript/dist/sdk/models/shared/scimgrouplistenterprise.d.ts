import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScimGroupListEnterpriseResourcesMembers extends SpeakeasyBase {
    dollarRef?: string;
    display?: string;
    value?: string;
}
export declare class ScimGroupListEnterpriseResourcesMeta extends SpeakeasyBase {
    created?: string;
    lastModified?: string;
    location?: string;
    resourceType?: string;
}
export declare class ScimGroupListEnterpriseResources extends SpeakeasyBase {
    displayName?: string;
    externalId?: string;
    id: string;
    members?: ScimGroupListEnterpriseResourcesMembers[];
    meta?: ScimGroupListEnterpriseResourcesMeta;
    schemas: string[];
}
export declare class ScimGroupListEnterprise extends SpeakeasyBase {
    resources: ScimGroupListEnterpriseResources[];
    itemsPerPage: number;
    schemas: string[];
    startIndex: number;
    totalResults: number;
}
