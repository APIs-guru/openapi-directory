import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnsubscribeAddressHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class UnsubscribeAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: UnsubscribeAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UnsubscribeAddressRequest;
}


export class UnsubscribeAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsubscribeAddress?: shared.UnsubscribeAddress;
}
