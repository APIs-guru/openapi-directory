import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetSettingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SetSettingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomerSettingsRequest;
}


export class SetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerSettingsResponse?: shared.CustomerSettingsResponse;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
