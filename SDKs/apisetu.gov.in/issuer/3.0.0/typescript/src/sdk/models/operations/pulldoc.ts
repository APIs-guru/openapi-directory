import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PullDocHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-digilocker-hmac" })
  xDigilockerHmac?: string;
}


export class PullDocRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PullDocHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;
}


export class PullDocResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
