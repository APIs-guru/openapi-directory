import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionsAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class CollectionsAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CollectionsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsAllPathParams;

  @SpeakeasyMetadata()
  queryParams: CollectionsAllQueryParams;
}


export class CollectionsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCollectionsResponse?: shared.GetCollectionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
