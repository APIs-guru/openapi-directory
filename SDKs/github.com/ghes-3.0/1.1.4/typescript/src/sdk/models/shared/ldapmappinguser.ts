import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LdapMappingUserPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collaborators" })
  collaborators: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=private_repos" })
  privateRepos: number;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space: number;
}


// LdapMappingUser
/** 
 * Ldap Private User
**/
export class LdapMappingUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @SpeakeasyMetadata({ data: "json, name=bio" })
  bio: string;

  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog: string;

  @SpeakeasyMetadata({ data: "json, name=business_plus" })
  businessPlus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collaborators" })
  collaborators: number;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=disk_usage" })
  diskUsage: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers: number;

  @SpeakeasyMetadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=following" })
  following: number;

  @SpeakeasyMetadata({ data: "json, name=following_url" })
  followingUrl: string;

  @SpeakeasyMetadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @SpeakeasyMetadata({ data: "json, name=hireable" })
  hireable: boolean;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=organizations_url" })
  organizationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=owned_private_repos" })
  ownedPrivateRepos: number;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: LdapMappingUserPlan;

  @SpeakeasyMetadata({ data: "json, name=private_gists" })
  privateGists: number;

  @SpeakeasyMetadata({ data: "json, name=public_gists" })
  publicGists: number;

  @SpeakeasyMetadata({ data: "json, name=public_repos" })
  publicRepos: number;

  @SpeakeasyMetadata({ data: "json, name=received_events_url" })
  receivedEventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @SpeakeasyMetadata({ data: "json, name=site_admin" })
  siteAdmin: boolean;

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=suspended_at" })
  suspendedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_private_repos" })
  totalPrivateRepos: number;

  @SpeakeasyMetadata({ data: "json, name=twitter_username" })
  twitterUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=two_factor_authentication" })
  twoFactorAuthentication: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
