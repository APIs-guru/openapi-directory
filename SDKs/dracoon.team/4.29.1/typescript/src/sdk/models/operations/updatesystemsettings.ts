import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSystemSettingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateSystemSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateSystemSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConfigOptionList;
}


export class UpdateSystemSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
