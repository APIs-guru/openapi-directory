import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
,    None = "none"
}

export enum OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum {
    All = "all"
,    Private = "private"
,    None = "none"
}


export class OrgsUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing_email" })
  billingEmail?: string;

  @Metadata({ data: "json, name=blog" })
  blog?: string;

  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=default_repository_permission" })
  defaultRepositoryPermission?: OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=has_organization_projects" })
  hasOrganizationProjects?: boolean;

  @Metadata({ data: "json, name=has_repository_projects" })
  hasRepositoryProjects?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=members_allowed_repository_creation_type" })
  membersAllowedRepositoryCreationType?: OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum;

  @Metadata({ data: "json, name=members_can_create_internal_repositories" })
  membersCanCreateInternalRepositories?: boolean;

  @Metadata({ data: "json, name=members_can_create_pages" })
  membersCanCreatePages?: boolean;

  @Metadata({ data: "json, name=members_can_create_private_pages" })
  membersCanCreatePrivatePages?: boolean;

  @Metadata({ data: "json, name=members_can_create_private_repositories" })
  membersCanCreatePrivateRepositories?: boolean;

  @Metadata({ data: "json, name=members_can_create_public_pages" })
  membersCanCreatePublicPages?: boolean;

  @Metadata({ data: "json, name=members_can_create_public_repositories" })
  membersCanCreatePublicRepositories?: boolean;

  @Metadata({ data: "json, name=members_can_create_repositories" })
  membersCanCreateRepositories?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=twitter_username" })
  twitterUsername?: string;
}


export class OrgsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OrgsUpdateRequestBody;
}


export class OrgsUpdate415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class OrgsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  organizationFull?: shared.OrganizationFull;

  @Metadata()
  orgsUpdate415ApplicationJsonObject?: OrgsUpdate415ApplicationJson;

  @Metadata()
  orgsUpdate422ApplicationJsonOneOf?: any;
}
