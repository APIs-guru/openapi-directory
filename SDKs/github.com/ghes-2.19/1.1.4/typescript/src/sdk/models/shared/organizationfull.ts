import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrganizationFullPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=filled_seats" })
  filledSeats?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private_repos" })
  privateRepos: number;

  @Metadata({ data: "json, name=seats" })
  seats?: number;

  @Metadata({ data: "json, name=space" })
  space: number;
}


// OrganizationFull
/** 
 * Organization Full
**/
export class OrganizationFull extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=billing_email" })
  billingEmail?: string;

  @Metadata({ data: "json, name=blog" })
  blog?: string;

  @Metadata({ data: "json, name=collaborators" })
  collaborators?: number;

  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=default_repository_permission" })
  defaultRepositoryPermission?: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=disk_usage" })
  diskUsage?: number;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=followers" })
  followers: number;

  @Metadata({ data: "json, name=following" })
  following: number;

  @Metadata({ data: "json, name=has_organization_projects" })
  hasOrganizationProjects: boolean;

  @Metadata({ data: "json, name=has_repository_projects" })
  hasRepositoryProjects: boolean;

  @Metadata({ data: "json, name=hooks_url" })
  hooksUrl: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=members_allowed_repository_creation_type" })
  membersAllowedRepositoryCreationType?: string;

  @Metadata({ data: "json, name=members_can_create_pages" })
  membersCanCreatePages?: boolean;

  @Metadata({ data: "json, name=members_can_create_private_pages" })
  membersCanCreatePrivatePages?: boolean;

  @Metadata({ data: "json, name=members_can_create_public_pages" })
  membersCanCreatePublicPages?: boolean;

  @Metadata({ data: "json, name=members_can_create_repositories" })
  membersCanCreateRepositories?: boolean;

  @Metadata({ data: "json, name=members_url" })
  membersUrl: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=owned_private_repos" })
  ownedPrivateRepos?: number;

  @Metadata({ data: "json, name=plan" })
  plan?: OrganizationFullPlan;

  @Metadata({ data: "json, name=private_gists" })
  privateGists?: number;

  @Metadata({ data: "json, name=public_gists" })
  publicGists: number;

  @Metadata({ data: "json, name=public_members_url" })
  publicMembersUrl: string;

  @Metadata({ data: "json, name=public_repos" })
  publicRepos: number;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @Metadata({ data: "json, name=total_private_repos" })
  totalPrivateRepos?: number;

  @Metadata({ data: "json, name=two_factor_requirement_enabled" })
  twoFactorRequirementEnabled?: boolean;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
