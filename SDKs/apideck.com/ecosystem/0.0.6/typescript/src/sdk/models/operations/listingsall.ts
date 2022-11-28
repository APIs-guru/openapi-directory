import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListingsAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class ListingsAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ListingsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListingsAllPathParams;

  @SpeakeasyMetadata()
  queryParams: ListingsAllQueryParams;
}


export class ListingsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListingsResponse?: shared.GetListingsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
