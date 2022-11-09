import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubscribeAddressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class SubscribeAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: SubscribeAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubscribeAddressRequest;
}


export class SubscribeAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscribeAddress?: shared.SubscribeAddress;
}
