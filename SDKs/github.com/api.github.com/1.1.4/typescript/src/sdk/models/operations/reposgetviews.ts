import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetViewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetViewsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: shared.PerEnum;
}


export class ReposGetViewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetViewsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposGetViewsQueryParams;
}


export class ReposGetViewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  viewTraffic?: shared.ViewTraffic;
}
