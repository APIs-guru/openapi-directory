import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCustomerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class CreateCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCustomerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NewCustomerRequest;
}


export class CreateCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  newCustomerResponse?: shared.NewCustomerResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createCustomer400ApplicationJsonOneOf?: any;
}
