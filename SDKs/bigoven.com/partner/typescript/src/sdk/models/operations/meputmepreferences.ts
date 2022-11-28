import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MePutMePreferencesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ModelsPreference?: shared.Api2ModelsPreference;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ModelsPreference1?: shared.Api2ModelsPreference;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ModelsPreference2?: shared.Api2ModelsPreference;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class MePutMePreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: MePutMePreferencesRequests;
}


export class MePutMePreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  api2ModelsBigOvenUser?: shared.Api2ModelsBigOvenUser;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
