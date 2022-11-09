import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PullDocHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-digilocker-hmac" })
  xDigilockerHmac?: string;
}


export class PullDocRequest extends SpeakeasyBase {
  @Metadata()
  headers: PullDocHeaders;

  @Metadata({ data: "request, media_type=application/xml" })
  request?: Uint8Array;
}


export class PullDocResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
