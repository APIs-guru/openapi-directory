import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCustomerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;
}


export class UpdateCustomerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class UpdateCustomerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCustomerPathParams;

  @Metadata()
  headers: UpdateCustomerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomerRequest;
}


export class UpdateCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCustomerResponse?: shared.UpdateCustomerResponse;
}
