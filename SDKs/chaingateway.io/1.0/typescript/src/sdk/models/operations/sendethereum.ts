import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendEthereumHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class SendEthereumRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendEthereumHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendEthereumRequest;
}


export class SendEthereumResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  sendEthereum?: shared.SendEthereum;
}
