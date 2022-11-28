import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}

export enum GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum {
    Merged = "MERGED",
    Superseded = "SUPERSEDED",
    Open = "OPEN",
    Declined = "DECLINED"
}


export class GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum;
}


export class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugPullrequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams;

  @SpeakeasyMetadata()
  security: GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugPullrequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedPullrequests?: shared.PaginatedPullrequests;
}
