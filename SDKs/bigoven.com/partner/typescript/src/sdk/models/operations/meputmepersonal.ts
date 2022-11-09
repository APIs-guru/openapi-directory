import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MePutMePersonalRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ModelsPersonal?: shared.Api2ModelsPersonal;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsPersonal1?: shared.Api2ModelsPersonal;

  @Metadata({ data: "request, media_type=text/json" })
  api2ModelsPersonal2?: shared.Api2ModelsPersonal;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MePutMePersonalRequest extends SpeakeasyBase {
  @Metadata()
  request: MePutMePersonalRequests;
}


export class MePutMePersonalResponse extends SpeakeasyBase {
  @Metadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
