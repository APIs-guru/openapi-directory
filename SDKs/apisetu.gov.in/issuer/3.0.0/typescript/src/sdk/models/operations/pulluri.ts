import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PullUriHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-digilocker-hmac" })
  xDigilockerHmac?: string;
}


export class PullUriRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PullUriHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;
}


export class PullUriResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
