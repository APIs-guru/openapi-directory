import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPullrequestsForCommitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPullrequestsForCommitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagelen" })
  pagelen?: number;
}


export class GetPullrequestsForCommitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPullrequestsForCommitPathParams;

  @Metadata()
  queryParams: GetPullrequestsForCommitQueryParams;
}


export class GetPullrequestsForCommitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedPullrequests?: shared.PaginatedPullrequests;
}
