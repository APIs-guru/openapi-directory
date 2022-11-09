import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3CustomersCurrentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3CustomersCurrentRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetV3CustomersCurrentHeaders;
}


export class GetV3CustomersCurrentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerInfoResponse?: shared.CustomerInfoResponse;

  @Metadata()
  statusCode: number;
}
