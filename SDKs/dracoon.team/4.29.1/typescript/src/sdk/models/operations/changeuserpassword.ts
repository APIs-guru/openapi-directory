import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeUserPasswordHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ChangeUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ChangeUserPasswordHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChangeUserPasswordRequest;
}


export class ChangeUserPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changeUserPassword400ApplicationJsonOneOf?: any;
}
