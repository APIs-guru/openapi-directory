import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CollectionListingsAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CollectionListingsAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CollectionListingsAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionListingsAllPathParams;

  @Metadata()
  queryParams: CollectionListingsAllQueryParams;
}


export class CollectionListingsAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListingsResponse?: shared.GetListingsResponse;

  @Metadata()
  statusCode: number;
}
