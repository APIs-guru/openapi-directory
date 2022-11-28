import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscribeAddressHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class SubscribeAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SubscribeAddressHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubscribeAddressRequest;
}


export class SubscribeAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscribeAddress?: shared.SubscribeAddress;
}
