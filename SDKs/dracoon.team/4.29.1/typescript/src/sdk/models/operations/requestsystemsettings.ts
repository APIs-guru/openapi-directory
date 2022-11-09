import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestSystemSettingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestSystemSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestSystemSettingsHeaders;
}


export class RequestSystemSettingsResponse extends SpeakeasyBase {
  @Metadata()
  configOptionList?: shared.ConfigOptionList;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
