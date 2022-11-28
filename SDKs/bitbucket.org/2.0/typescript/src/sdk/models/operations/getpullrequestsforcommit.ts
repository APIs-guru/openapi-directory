import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPullrequestsForCommitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPullrequestsForCommitQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagelen" })
  pagelen?: number;
}


export class GetPullrequestsForCommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPullrequestsForCommitPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPullrequestsForCommitQueryParams;
}


export class GetPullrequestsForCommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedPullrequests?: shared.PaginatedPullrequests;
}
