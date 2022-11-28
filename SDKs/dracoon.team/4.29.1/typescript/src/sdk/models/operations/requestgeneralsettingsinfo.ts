import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestGeneralSettingsInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestGeneralSettingsInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestGeneralSettingsInfoHeaders;
}


export class RequestGeneralSettingsInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  generalSettingsInfo?: shared.GeneralSettingsInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
