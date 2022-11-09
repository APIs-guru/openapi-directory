import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnableCustomerEncryptionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class EnableCustomerEncryptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableCustomerEncryptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnableCustomerEncryptionRequest;
}


export class EnableCustomerEncryptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerData?: shared.CustomerData;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
