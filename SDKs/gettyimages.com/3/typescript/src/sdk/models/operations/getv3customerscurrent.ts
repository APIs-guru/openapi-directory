import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3CustomersCurrentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3CustomersCurrentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetV3CustomersCurrentHeaders;
}


export class GetV3CustomersCurrentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerInfoResponse?: shared.CustomerInfoResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
