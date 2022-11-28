import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetaRoot200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizations_url" })
  authorizationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=code_search_url" })
  codeSearchUrl: string;

  @SpeakeasyMetadata({ data: "json, name=commit_search_url" })
  commitSearchUrl: string;

  @SpeakeasyMetadata({ data: "json, name=current_user_authorizations_html_url" })
  currentUserAuthorizationsHtmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=current_user_repositories_url" })
  currentUserRepositoriesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=current_user_url" })
  currentUserUrl: string;

  @SpeakeasyMetadata({ data: "json, name=emails_url" })
  emailsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=emojis_url" })
  emojisUrl: string;

  @SpeakeasyMetadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=feeds_url" })
  feedsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=following_url" })
  followingUrl: string;

  @SpeakeasyMetadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=hub_url" })
  hubUrl: string;

  @SpeakeasyMetadata({ data: "json, name=issue_search_url" })
  issueSearchUrl: string;

  @SpeakeasyMetadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=keys_url" })
  keysUrl: string;

  @SpeakeasyMetadata({ data: "json, name=label_search_url" })
  labelSearchUrl: string;

  @SpeakeasyMetadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=organization_repositories_url" })
  organizationRepositoriesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=organization_teams_url" })
  organizationTeamsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=organization_url" })
  organizationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=public_gists_url" })
  publicGistsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=rate_limit_url" })
  rateLimitUrl: string;

  @SpeakeasyMetadata({ data: "json, name=repository_search_url" })
  repositorySearchUrl: string;

  @SpeakeasyMetadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @SpeakeasyMetadata({ data: "json, name=starred_gists_url" })
  starredGistsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @SpeakeasyMetadata({ data: "json, name=topic_search_url" })
  topicSearchUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=user_organizations_url" })
  userOrganizationsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=user_repositories_url" })
  userRepositoriesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=user_search_url" })
  userSearchUrl: string;

  @SpeakeasyMetadata({ data: "json, name=user_url" })
  userUrl: string;
}


export class MetaRootResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  metaRoot200ApplicationJsonObject?: MetaRoot200ApplicationJson;
}
