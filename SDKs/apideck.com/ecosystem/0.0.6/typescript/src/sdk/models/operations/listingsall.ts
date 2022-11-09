import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListingsAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class ListingsAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=external_id" })
  externalId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ListingsAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListingsAllPathParams;

  @Metadata()
  queryParams: ListingsAllQueryParams;
}


export class ListingsAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListingsResponse?: shared.GetListingsResponse;

  @Metadata()
  statusCode: number;
}
