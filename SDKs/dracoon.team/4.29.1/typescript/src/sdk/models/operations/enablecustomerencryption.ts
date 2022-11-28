import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnableCustomerEncryptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class EnableCustomerEncryptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnableCustomerEncryptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EnableCustomerEncryptionRequest;
}


export class EnableCustomerEncryptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerData?: shared.CustomerData;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
