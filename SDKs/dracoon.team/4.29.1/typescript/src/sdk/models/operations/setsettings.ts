import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetSettingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerSettingsRequest;
}


export class SetSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerSettingsResponse?: shared.CustomerSettingsResponse;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
