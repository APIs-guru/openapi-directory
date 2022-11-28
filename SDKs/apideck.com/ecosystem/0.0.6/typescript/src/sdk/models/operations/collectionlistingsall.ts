import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CollectionListingsAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CollectionListingsAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CollectionListingsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionListingsAllPathParams;

  @SpeakeasyMetadata()
  queryParams: CollectionListingsAllQueryParams;
}


export class CollectionListingsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListingsResponse?: shared.GetListingsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
