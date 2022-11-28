import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsUpdatePathParams extends SpeakeasyBase {
    org: string;
}
export declare enum OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}
export declare enum OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum {
    All = "all",
    Private = "private",
    None = "none"
}
export declare class OrgsUpdateRequestBody extends SpeakeasyBase {
    billingEmail?: string;
    blog?: string;
    company?: string;
    defaultRepositoryPermission?: OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum;
    description?: string;
    email?: string;
    hasOrganizationProjects?: boolean;
    hasRepositoryProjects?: boolean;
    location?: string;
    membersAllowedRepositoryCreationType?: OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum;
    membersCanCreateInternalRepositories?: boolean;
    membersCanCreatePages?: boolean;
    membersCanCreatePrivateRepositories?: boolean;
    membersCanCreatePublicRepositories?: boolean;
    membersCanCreateRepositories?: boolean;
    name?: string;
    twitterUsername?: string;
}
export declare class OrgsUpdate415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class OrgsUpdateRequest extends SpeakeasyBase {
    pathParams: OrgsUpdatePathParams;
    request?: OrgsUpdateRequestBody;
}
export declare class OrgsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    organizationFull?: shared.OrganizationFull;
    orgsUpdate415ApplicationJsonObject?: OrgsUpdate415ApplicationJson;
    orgsUpdate422ApplicationJsonOneOf?: any;
}
