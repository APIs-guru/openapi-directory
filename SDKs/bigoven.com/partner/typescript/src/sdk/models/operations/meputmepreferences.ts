import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MePutMePreferencesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ModelsPreference?: shared.Api2ModelsPreference;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsPreference1?: shared.Api2ModelsPreference;

  @Metadata({ data: "request, media_type=text/json" })
  api2ModelsPreference2?: shared.Api2ModelsPreference;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MePutMePreferencesRequest extends SpeakeasyBase {
  @Metadata()
  request: MePutMePreferencesRequests;
}


export class MePutMePreferencesResponse extends SpeakeasyBase {
  @Metadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
