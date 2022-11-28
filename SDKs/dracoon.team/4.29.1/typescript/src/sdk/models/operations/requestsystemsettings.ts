import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestSystemSettingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestSystemSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestSystemSettingsHeaders;
}


export class RequestSystemSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configOptionList?: shared.ConfigOptionList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
