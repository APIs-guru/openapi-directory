import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GistsListCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gist_id" })
  gistId: string;
}


export class GistsListCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GistsListCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GistsListCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GistsListCommentsQueryParams;
}


export class GistsListCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.GistComment })
  gistComments?: shared.GistComment[];
}
