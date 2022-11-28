import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aws } from "./aws";
import { ScopeEnum } from "./scopeenum";



export class ProjectFeatureFlags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build-fork-prs" })
  buildForkPrs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fleet" })
  fleet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=junit" })
  junit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oss" })
  oss?: boolean;

  @SpeakeasyMetadata({ data: "json, name=osx" })
  osx?: boolean;

  @SpeakeasyMetadata({ data: "json, name=set-github-status" })
  setGithubStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trusty-beta" })
  trustyBeta?: boolean;
}


export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aws" })
  aws?: Aws;

  @SpeakeasyMetadata({ data: "json, name=branches" })
  branches?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=campfire_notify_prefs" })
  campfireNotifyPrefs?: string;

  @SpeakeasyMetadata({ data: "json, name=campfire_room" })
  campfireRoom?: string;

  @SpeakeasyMetadata({ data: "json, name=campfire_subdomain" })
  campfireSubdomain?: string;

  @SpeakeasyMetadata({ data: "json, name=campfire_token" })
  campfireToken?: string;

  @SpeakeasyMetadata({ data: "json, name=compile" })
  compile?: string;

  @SpeakeasyMetadata({ data: "json, name=default_branch" })
  defaultBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=dependencies" })
  dependencies?: string;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: string;

  @SpeakeasyMetadata({ data: "json, name=feature_flags" })
  featureFlags?: ProjectFeatureFlags;

  @SpeakeasyMetadata({ data: "json, name=flowdock_api_token" })
  flowdockApiToken?: string;

  @SpeakeasyMetadata({ data: "json, name=followed" })
  followed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_usable_key" })
  hasUsableKey?: boolean;

  @SpeakeasyMetadata({ data: "json, name=heroku_deploy_user" })
  herokuDeployUser?: string;

  @SpeakeasyMetadata({ data: "json, name=hipchat_api_token" })
  hipchatApiToken?: string;

  @SpeakeasyMetadata({ data: "json, name=hipchat_notify" })
  hipchatNotify?: string;

  @SpeakeasyMetadata({ data: "json, name=hipchat_notify_prefs" })
  hipchatNotifyPrefs?: string;

  @SpeakeasyMetadata({ data: "json, name=hipchat_room" })
  hipchatRoom?: string;

  @SpeakeasyMetadata({ data: "json, name=irc_channel" })
  ircChannel?: string;

  @SpeakeasyMetadata({ data: "json, name=irc_keyword" })
  ircKeyword?: string;

  @SpeakeasyMetadata({ data: "json, name=irc_notify_prefs" })
  ircNotifyPrefs?: string;

  @SpeakeasyMetadata({ data: "json, name=irc_password" })
  ircPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=irc_server" })
  ircServer?: string;

  @SpeakeasyMetadata({ data: "json, name=irc_username" })
  ircUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=oss" })
  oss?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parallel" })
  parallel?: number;

  @SpeakeasyMetadata({ data: "json, name=reponame" })
  reponame?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: ScopeEnum[];

  @SpeakeasyMetadata({ data: "json, name=setup" })
  setup?: string;

  @SpeakeasyMetadata({ data: "json, name=slack_api_token" })
  slackApiToken?: string;

  @SpeakeasyMetadata({ data: "json, name=slack_channel" })
  slackChannel?: string;

  @SpeakeasyMetadata({ data: "json, name=slack_channel_override" })
  slackChannelOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=slack_notify_prefs" })
  slackNotifyPrefs?: string;

  @SpeakeasyMetadata({ data: "json, name=slack_subdomain" })
  slackSubdomain?: string;

  @SpeakeasyMetadata({ data: "json, name=slack_webhook_url" })
  slackWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ssh_keys" })
  sshKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_type" })
  vcsType?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_url" })
  vcsUrl?: string;
}
