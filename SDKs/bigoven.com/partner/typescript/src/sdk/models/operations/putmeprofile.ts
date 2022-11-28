import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMeProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ModelsProfile?: shared.Api2ModelsProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsProfile1?: shared.Api2ModelsProfile;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ModelsProfile2?: shared.Api2ModelsProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PutMeProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PutMeProfileRequests;
}


export class PutMeProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
