import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestGeneralSettingsInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestGeneralSettingsInfoRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestGeneralSettingsInfoHeaders;
}


export class RequestGeneralSettingsInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  generalSettingsInfo?: shared.GeneralSettingsInfo;

  @Metadata()
  statusCode: number;
}
