import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMeProfileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ModelsProfile?: shared.Api2ModelsProfile;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsProfile1?: shared.Api2ModelsProfile;

  @Metadata({ data: "request, media_type=text/json" })
  api2ModelsProfile2?: shared.Api2ModelsProfile;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PutMeProfileRequest extends SpeakeasyBase {
  @Metadata()
  request: PutMeProfileRequests;
}


export class PutMeProfileResponse extends SpeakeasyBase {
  @Metadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
