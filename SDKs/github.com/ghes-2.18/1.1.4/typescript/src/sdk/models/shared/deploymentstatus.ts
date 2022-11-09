import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeploymentStatusSimpleUser extends SpeakeasyBase {
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

export enum DeploymentStatusStateEnum {
    Error = "error"
,    Failure = "failure"
,    Inactive = "inactive"
,    Pending = "pending"
,    Success = "success"
,    Queued = "queued"
,    InProgress = "in_progress"
}


// DeploymentStatus
/** 
 * The status of a deployment.
**/
export class DeploymentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=creator" })
  creator: DeploymentStatusSimpleUser;

  @Metadata({ data: "json, name=deployment_url" })
  deploymentUrl: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=environment_url" })
  environmentUrl?: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=log_url" })
  logUrl?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=performed_via_github_app" })
  performedViaGithubApp?: Map<string, any>;

  @Metadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @Metadata({ data: "json, name=state" })
  state: DeploymentStatusStateEnum;

  @Metadata({ data: "json, name=target_url" })
  targetUrl: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
