import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PullUriHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-digilocker-hmac" })
  xDigilockerHmac?: string;
}


export class PullUriRequest extends SpeakeasyBase {
  @Metadata()
  headers: PullUriHeaders;

  @Metadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;
}


export class PullUriResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
