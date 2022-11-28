import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestCustomerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;
}


export class RequestCustomerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_attributes" })
  includeAttributes?: boolean;
}


export class RequestCustomerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class RequestCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestCustomerPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestCustomerQueryParams;

  @SpeakeasyMetadata()
  headers: RequestCustomerHeaders;
}


export class RequestCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
