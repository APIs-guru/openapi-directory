import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MetaRoot200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizations_url" })
  authorizationsUrl: string;

  @Metadata({ data: "json, name=code_search_url" })
  codeSearchUrl: string;

  @Metadata({ data: "json, name=commit_search_url" })
  commitSearchUrl: string;

  @Metadata({ data: "json, name=current_user_authorizations_html_url" })
  currentUserAuthorizationsHtmlUrl: string;

  @Metadata({ data: "json, name=current_user_repositories_url" })
  currentUserRepositoriesUrl: string;

  @Metadata({ data: "json, name=current_user_url" })
  currentUserUrl: string;

  @Metadata({ data: "json, name=emails_url" })
  emailsUrl: string;

  @Metadata({ data: "json, name=emojis_url" })
  emojisUrl: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=feeds_url" })
  feedsUrl: string;

  @Metadata({ data: "json, name=followers_url" })
  followersUrl: string;

  @Metadata({ data: "json, name=following_url" })
  followingUrl: string;

  @Metadata({ data: "json, name=gists_url" })
  gistsUrl: string;

  @Metadata({ data: "json, name=hub_url" })
  hubUrl: string;

  @Metadata({ data: "json, name=issue_search_url" })
  issueSearchUrl: string;

  @Metadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @Metadata({ data: "json, name=keys_url" })
  keysUrl: string;

  @Metadata({ data: "json, name=label_search_url" })
  labelSearchUrl: string;

  @Metadata({ data: "json, name=notifications_url" })
  notificationsUrl: string;

  @Metadata({ data: "json, name=organization_repositories_url" })
  organizationRepositoriesUrl: string;

  @Metadata({ data: "json, name=organization_teams_url" })
  organizationTeamsUrl: string;

  @Metadata({ data: "json, name=organization_url" })
  organizationUrl: string;

  @Metadata({ data: "json, name=public_gists_url" })
  publicGistsUrl: string;

  @Metadata({ data: "json, name=rate_limit_url" })
  rateLimitUrl: string;

  @Metadata({ data: "json, name=repository_search_url" })
  repositorySearchUrl: string;

  @Metadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @Metadata({ data: "json, name=starred_gists_url" })
  starredGistsUrl: string;

  @Metadata({ data: "json, name=starred_url" })
  starredUrl: string;

  @Metadata({ data: "json, name=topic_search_url" })
  topicSearchUrl?: string;

  @Metadata({ data: "json, name=user_organizations_url" })
  userOrganizationsUrl: string;

  @Metadata({ data: "json, name=user_repositories_url" })
  userRepositoriesUrl: string;

  @Metadata({ data: "json, name=user_search_url" })
  userSearchUrl: string;

  @Metadata({ data: "json, name=user_url" })
  userUrl: string;
}


export class MetaRootResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  metaRoot200ApplicationJsonObject?: MetaRoot200ApplicationJson;
}
