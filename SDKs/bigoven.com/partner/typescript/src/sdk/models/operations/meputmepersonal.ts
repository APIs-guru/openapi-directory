import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MePutMePersonalRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ModelsPersonal?: shared.Api2ModelsPersonal;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsPersonal1?: shared.Api2ModelsPersonal;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ModelsPersonal2?: shared.Api2ModelsPersonal;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MePutMePersonalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: MePutMePersonalRequests;
}


export class MePutMePersonalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
