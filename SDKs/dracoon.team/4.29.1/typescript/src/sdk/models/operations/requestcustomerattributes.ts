import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestCustomerAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;
}


export class RequestCustomerAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestCustomerAttributesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class RequestCustomerAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestCustomerAttributesPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestCustomerAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: RequestCustomerAttributesHeaders;
}


export class RequestCustomerAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributesResponse?: shared.AttributesResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
