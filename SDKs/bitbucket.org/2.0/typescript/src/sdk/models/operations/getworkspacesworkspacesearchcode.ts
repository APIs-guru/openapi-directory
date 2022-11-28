import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspacesWorkspaceSearchCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspaceSearchCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagelen" })
  pagelen?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_query" })
  searchQuery: string;
}


export class GetWorkspacesWorkspaceSearchCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspacesWorkspaceSearchCodePathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkspacesWorkspaceSearchCodeQueryParams;
}


export class GetWorkspacesWorkspaceSearchCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  searchResultPage?: shared.SearchResultPage;
}
