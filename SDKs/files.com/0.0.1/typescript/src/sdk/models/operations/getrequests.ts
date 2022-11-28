import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" })
  mine?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRequestsQueryParams;
}


export class GetRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RequestEntity })
  requestEntities?: shared.RequestEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
