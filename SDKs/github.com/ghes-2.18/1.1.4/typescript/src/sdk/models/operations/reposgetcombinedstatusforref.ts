import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetCombinedStatusForRefPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetCombinedStatusForRefQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposGetCombinedStatusForRefRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetCombinedStatusForRefPathParams;

  @Metadata()
  queryParams: ReposGetCombinedStatusForRefQueryParams;
}


export class ReposGetCombinedStatusForRefResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  combinedCommitStatus?: shared.CombinedCommitStatus;
}
