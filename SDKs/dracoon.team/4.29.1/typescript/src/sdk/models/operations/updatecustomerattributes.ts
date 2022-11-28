import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCustomerAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;
}


export class UpdateCustomerAttributesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class UpdateCustomerAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCustomerAttributesPathParams;

  @SpeakeasyMetadata()
  headers: UpdateCustomerAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomerAttributes;
}


export class UpdateCustomerAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
