import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LdapMappingUserPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=collaborators" })
  collaborators: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private_repos" })
  privateRepos: number;

  @Metadata({ data: "json, name=space" })
  space: number;
}


// LdapMappingUser
/** 
 * Ldap Private User
**/
export class LdapMappingUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=bio" })
  bio: string;

  @Metadata({ data: "json, name=blog" })
  blog: string;

  @Metadata({ data: "json, name=business_plus" })
  businessPlus?: boolean;

  @Metadata({ data: "json, name=collaborators" })
  collaborators: number;

  @Metadata({ data: "json, name=company" })
  company: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=disk_usage" })
  diskUsage: number;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=followers" })
  followers: number;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @Metadata({ data: "json, name=following" })
  following: number;

  @Metadata({ data: "json, name=following_url" })
  followingUrl: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @Metadata({ data: "json, name=hireable" })
  hireable: boolean;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;

  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl: string;

  @Metadata({ data: "json, name=owned_private_repos" })
  ownedPrivateRepos: number;

  @Metadata({ data: "json, name=plan" })
  plan?: LdapMappingUserPlan;

  @Metadata({ data: "json, name=private_gists" })
  privateGists: number;

  @Metadata({ data: "json, name=public_gists" })
  publicGists: number;

  @Metadata({ data: "json, name=public_repos" })
  publicRepos: number;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin: boolean;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=suspended_at" })
  suspendedAt?: Date;

  @Metadata({ data: "json, name=total_private_repos" })
  totalPrivateRepos: number;

  @Metadata({ data: "json, name=twitter_username" })
  twitterUsername?: string;

  @Metadata({ data: "json, name=two_factor_authentication" })
  twoFactorAuthentication: boolean;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
