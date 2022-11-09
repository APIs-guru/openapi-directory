import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestGeneralSettingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestGeneralSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestGeneralSettingsHeaders;
}


export class RequestGeneralSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  generalSettings?: shared.GeneralSettings;

  @Metadata()
  statusCode: number;
}
