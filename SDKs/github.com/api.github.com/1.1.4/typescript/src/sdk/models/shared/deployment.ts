import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeploymentSimpleUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @Metadata({ data: "json, name=following_url" })
  followingUrl: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @Metadata({ data: "json, name=gravatar_id" })
  gravatarId: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=organizations_url" })
  organizationsUrl: string;

  @Metadata({ data: "json, name=received_events_url" })
  receivedEventsUrl: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin: boolean;

  @Metadata({ data: "json, name=starred_at" })
  starredAt?: string;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=subscriptions_url" })
  subscriptionsUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// Deployment
/** 
 * A request for a specific ref(branch,sha,tag) to be deployed
**/
export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=creator" })
  creator: DeploymentSimpleUser;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=environment" })
  environment: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=original_environment" })
  originalEnvironment?: string;

  @Metadata({ data: "json, name=payload" })
  payload: Map<string, any>;

  @Metadata({ data: "json, name=performed_via_github_app" })
  performedViaGithubApp?: Map<string, any>;

  @Metadata({ data: "json, name=production_environment" })
  productionEnvironment?: boolean;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=statuses_url" })
  statusesUrl: string;

  @Metadata({ data: "json, name=task" })
  task: string;

  @Metadata({ data: "json, name=transient_environment" })
  transientEnvironment?: boolean;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
