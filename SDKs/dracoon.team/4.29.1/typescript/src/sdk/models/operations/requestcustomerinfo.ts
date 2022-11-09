import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestCustomerInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestCustomerInfoRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestCustomerInfoHeaders;
}


export class RequestCustomerInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerData?: shared.CustomerData;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
