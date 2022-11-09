import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MePutMeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsBigOvenUser1?: shared.Api2ModelsBigOvenUser;

  @Metadata({ data: "request, media_type=text/json" })
  api2ModelsBigOvenUser2?: shared.Api2ModelsBigOvenUser;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MePutMeRequest extends SpeakeasyBase {
  @Metadata()
  request: MePutMeRequests;
}


export class MePutMeResponse extends SpeakeasyBase {
  @Metadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
