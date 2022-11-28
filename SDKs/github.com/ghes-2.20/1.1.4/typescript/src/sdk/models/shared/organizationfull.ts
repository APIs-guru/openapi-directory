import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrganizationFullPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filled_seats" })
  filledSeats?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=private_repos" })
  privateRepos: number;

  @SpeakeasyMetadata({ data: "json, name=seats" })
  seats?: number;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space: number;
}


// OrganizationFull
/** 
 * Organization Full
**/
export class OrganizationFull extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=billing_email" })
  billingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog?: string;

  @SpeakeasyMetadata({ data: "json, name=collaborators" })
  collaborators?: number;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=default_repository_permission" })
  defaultRepositoryPermission?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=disk_usage" })
  diskUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: number;

  @SpeakeasyMetadata({ data: "json, name=following" })
  following: number;

  @SpeakeasyMetadata({ data: "json, name=has_organization_projects" })
  hasOrganizationProjects: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_repository_projects" })
  hasRepositoryProjects: boolean;

  @SpeakeasyMetadata({ data: "json, name=hooks_url" })
  hooksUrl: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=members_allowed_repository_creation_type" })
  membersAllowedRepositoryCreationType?: string;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_internal_repositories" })
  membersCanCreateInternalRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_pages" })
  membersCanCreatePages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_private_pages" })
  membersCanCreatePrivatePages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_private_repositories" })
  membersCanCreatePrivateRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_public_pages" })
  membersCanCreatePublicPages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_public_repositories" })
  membersCanCreatePublicRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_can_create_repositories" })
  membersCanCreateRepositories?: boolean;

  @SpeakeasyMetadata({ data: "json, name=members_url" })
  membersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=owned_private_repos" })
  ownedPrivateRepos?: number;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: OrganizationFullPlan;

  @SpeakeasyMetadata({ data: "json, name=private_gists" })
  privateGists?: number;

  @SpeakeasyMetadata({ data: "json, name=public_gists" })
  publicGists: number;

  @SpeakeasyMetadata({ data: "json, name=public_members_url" })
  publicMembersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=public_repos" })
  publicRepos: number;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @SpeakeasyMetadata({ data: "json, name=total_private_repos" })
  totalPrivateRepos?: number;

  @SpeakeasyMetadata({ data: "json, name=two_factor_requirement_enabled" })
  twoFactorRequirementEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
