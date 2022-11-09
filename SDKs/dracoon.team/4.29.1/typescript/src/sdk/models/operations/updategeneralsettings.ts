import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGeneralSettingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateGeneralSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateGeneralSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateGeneralSettings;
}


export class UpdateGeneralSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  generalSettings?: shared.GeneralSettings;

  @Metadata()
  statusCode: number;
}
