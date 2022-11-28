import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoriesWorkspaceRepoSlugSrcPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}

export enum GetRepositoriesWorkspaceRepoSlugSrcFormatEnum {
    Meta = "meta"
}


export class GetRepositoriesWorkspaceRepoSlugSrcQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetRepositoriesWorkspaceRepoSlugSrcFormatEnum;
}


export class GetRepositoriesWorkspaceRepoSlugSrcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugSrcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugSrcPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRepositoriesWorkspaceRepoSlugSrcQueryParams;

  @SpeakeasyMetadata()
  security: GetRepositoriesWorkspaceRepoSlugSrcSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugSrcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedTreeentries?: shared.PaginatedTreeentries;
}
