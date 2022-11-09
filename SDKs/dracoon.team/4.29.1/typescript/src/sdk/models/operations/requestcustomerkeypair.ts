import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestCustomerKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestCustomerKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestCustomerKeyPairHeaders;
}


export class RequestCustomerKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  userKeyPairContainer?: shared.UserKeyPairContainer;
}
