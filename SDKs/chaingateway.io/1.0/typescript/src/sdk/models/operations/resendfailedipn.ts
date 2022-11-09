import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResendFailedIpnHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class ResendFailedIpnRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResendFailedIpnHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResendFailedIpnRequest;
}


export class ResendFailedIpnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  resendFailedIpn?: shared.ResendFailedIpn;
}
