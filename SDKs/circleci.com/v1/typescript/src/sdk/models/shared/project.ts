import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Aws } from "./aws";
import { ScopeEnum } from "./scopeenum";


export class ProjectFeatureFlags extends SpeakeasyBase {
  @Metadata({ data: "json, name=build-fork-prs" })
  buildForkPrs?: boolean;

  @Metadata({ data: "json, name=fleet" })
  fleet?: boolean;

  @Metadata({ data: "json, name=junit" })
  junit?: boolean;

  @Metadata({ data: "json, name=oss" })
  oss?: boolean;

  @Metadata({ data: "json, name=osx" })
  osx?: boolean;

  @Metadata({ data: "json, name=set-github-status" })
  setGithubStatus?: boolean;

  @Metadata({ data: "json, name=trusty-beta" })
  trustyBeta?: boolean;
}


export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=aws" })
  aws?: Aws;

  @Metadata({ data: "json, name=branches" })
  branches?: Map<string, any>;

  @Metadata({ data: "json, name=campfire_notify_prefs" })
  campfireNotifyPrefs?: string;

  @Metadata({ data: "json, name=campfire_room" })
  campfireRoom?: string;

  @Metadata({ data: "json, name=campfire_subdomain" })
  campfireSubdomain?: string;

  @Metadata({ data: "json, name=campfire_token" })
  campfireToken?: string;

  @Metadata({ data: "json, name=compile" })
  compile?: string;

  @Metadata({ data: "json, name=default_branch" })
  defaultBranch?: string;

  @Metadata({ data: "json, name=dependencies" })
  dependencies?: string;

  @Metadata({ data: "json, name=extra" })
  extra?: string;

  @Metadata({ data: "json, name=feature_flags" })
  featureFlags?: ProjectFeatureFlags;

  @Metadata({ data: "json, name=flowdock_api_token" })
  flowdockApiToken?: string;

  @Metadata({ data: "json, name=followed" })
  followed?: boolean;

  @Metadata({ data: "json, name=has_usable_key" })
  hasUsableKey?: boolean;

  @Metadata({ data: "json, name=heroku_deploy_user" })
  herokuDeployUser?: string;

  @Metadata({ data: "json, name=hipchat_api_token" })
  hipchatApiToken?: string;

  @Metadata({ data: "json, name=hipchat_notify" })
  hipchatNotify?: string;

  @Metadata({ data: "json, name=hipchat_notify_prefs" })
  hipchatNotifyPrefs?: string;

  @Metadata({ data: "json, name=hipchat_room" })
  hipchatRoom?: string;

  @Metadata({ data: "json, name=irc_channel" })
  ircChannel?: string;

  @Metadata({ data: "json, name=irc_keyword" })
  ircKeyword?: string;

  @Metadata({ data: "json, name=irc_notify_prefs" })
  ircNotifyPrefs?: string;

  @Metadata({ data: "json, name=irc_password" })
  ircPassword?: string;

  @Metadata({ data: "json, name=irc_server" })
  ircServer?: string;

  @Metadata({ data: "json, name=irc_username" })
  ircUsername?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=oss" })
  oss?: boolean;

  @Metadata({ data: "json, name=parallel" })
  parallel?: number;

  @Metadata({ data: "json, name=reponame" })
  reponame?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: ScopeEnum[];

  @Metadata({ data: "json, name=setup" })
  setup?: string;

  @Metadata({ data: "json, name=slack_api_token" })
  slackApiToken?: string;

  @Metadata({ data: "json, name=slack_channel" })
  slackChannel?: string;

  @Metadata({ data: "json, name=slack_channel_override" })
  slackChannelOverride?: string;

  @Metadata({ data: "json, name=slack_notify_prefs" })
  slackNotifyPrefs?: string;

  @Metadata({ data: "json, name=slack_subdomain" })
  slackSubdomain?: string;

  @Metadata({ data: "json, name=slack_webhook_url" })
  slackWebhookUrl?: string;

  @Metadata({ data: "json, name=ssh_keys" })
  sshKeys?: string[];

  @Metadata({ data: "json, name=test" })
  test?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=vcs_type" })
  vcsType?: string;

  @Metadata({ data: "json, name=vcs_url" })
  vcsUrl?: string;
}
