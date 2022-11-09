import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class CreateCustomerRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCustomerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NewCustomerRequest;
}


export class CreateCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  newCustomerResponse?: shared.NewCustomerResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createCustomer400ApplicationJsonOneOf?: any;
}
