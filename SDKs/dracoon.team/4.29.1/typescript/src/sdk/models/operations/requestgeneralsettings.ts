import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestGeneralSettingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestGeneralSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestGeneralSettingsHeaders;
}


export class RequestGeneralSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  generalSettings?: shared.GeneralSettings;

  @SpeakeasyMetadata()
  statusCode: number;
}
