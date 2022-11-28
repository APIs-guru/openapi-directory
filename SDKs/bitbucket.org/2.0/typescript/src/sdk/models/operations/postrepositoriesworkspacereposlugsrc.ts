import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRepositoriesWorkspaceRepoSlugSrcPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugSrcQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=files" })
  files?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parents" })
  parents?: string;
}


export class PostRepositoriesWorkspaceRepoSlugSrcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugSrcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugSrcPathParams;

  @SpeakeasyMetadata()
  queryParams: PostRepositoriesWorkspaceRepoSlugSrcQueryParams;

  @SpeakeasyMetadata()
  security: PostRepositoriesWorkspaceRepoSlugSrcSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugSrcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
