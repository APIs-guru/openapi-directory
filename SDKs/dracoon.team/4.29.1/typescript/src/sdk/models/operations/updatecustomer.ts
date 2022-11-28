import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCustomerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;
}


export class UpdateCustomerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class UpdateCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCustomerPathParams;

  @SpeakeasyMetadata()
  headers: UpdateCustomerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomerRequest;
}


export class UpdateCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCustomerResponse?: shared.UpdateCustomerResponse;
}
