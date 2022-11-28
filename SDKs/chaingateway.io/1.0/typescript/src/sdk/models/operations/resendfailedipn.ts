import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResendFailedIpnHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class ResendFailedIpnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ResendFailedIpnHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ResendFailedIpnRequest;
}


export class ResendFailedIpnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  resendFailedIpn?: shared.ResendFailedIpn;
}
