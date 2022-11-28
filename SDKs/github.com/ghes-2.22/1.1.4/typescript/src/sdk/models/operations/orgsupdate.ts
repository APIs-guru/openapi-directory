import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}

export enum OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum {
    All = "all",
    Private = "private",
    None = "none"
}


export class OrgsUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_email" })
  billingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog?: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=default_repository_permission" })
  defaultRepositoryPermission?: OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=has_organization_projects" })
  hasOrganizationProjects?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_repository_projects" })
  hasRepositoryProjects?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=members_allowed_repository_creation_type" })
  membersAllowedRepositoryCreationType?: OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_internal_repositories" })
  membersCanCreateInternalRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_private_repositories" })
  membersCanCreatePrivateRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_public_repositories" })
  membersCanCreatePublicRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_repositories" })
  membersCanCreateRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter_username" })
  twitterUsername?: string;
}


export class OrgsUpdate415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class OrgsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OrgsUpdateRequestBody;
}


export class OrgsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  organizationFull?: shared.OrganizationFull;

  @SpeakeasyMetadata()
  orgsUpdate415ApplicationJsonObject?: OrgsUpdate415ApplicationJson;

  @SpeakeasyMetadata()
  orgsUpdate422ApplicationJsonOneOf?: any;
}
