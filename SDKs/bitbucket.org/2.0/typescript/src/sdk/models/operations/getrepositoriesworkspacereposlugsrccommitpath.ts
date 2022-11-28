import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}

export enum GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum {
    Meta = "meta",
    Rendered = "rendered"
}


export class GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_depth" })
  maxDepth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams;

  @SpeakeasyMetadata()
  security: GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedTreeentries?: shared.PaginatedTreeentries;
}
