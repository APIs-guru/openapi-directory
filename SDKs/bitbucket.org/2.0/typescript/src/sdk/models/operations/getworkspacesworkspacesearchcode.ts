import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspaceSearchCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspaceSearchCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagelen" })
  pagelen?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_query" })
  searchQuery: string;
}


export class GetWorkspacesWorkspaceSearchCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspaceSearchCodePathParams;

  @Metadata()
  queryParams: GetWorkspacesWorkspaceSearchCodeQueryParams;
}


export class GetWorkspacesWorkspaceSearchCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  searchResultPage?: shared.SearchResultPage;
}
