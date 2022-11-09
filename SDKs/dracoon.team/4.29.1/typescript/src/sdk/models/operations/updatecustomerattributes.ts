import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCustomerAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;
}


export class UpdateCustomerAttributesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class UpdateCustomerAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCustomerAttributesPathParams;

  @Metadata()
  headers: UpdateCustomerAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerAttributes;
}


export class UpdateCustomerAttributesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customer?: shared.Customer;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
