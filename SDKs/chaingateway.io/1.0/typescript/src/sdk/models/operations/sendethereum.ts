import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendEthereumHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class SendEthereumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendEthereumHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendEthereumRequest;
}


export class SendEthereumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendEthereum?: shared.SendEthereum;
}
