import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAvatarHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAvatarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestAvatarHeaders;
}


export class RequestAvatarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  avatar?: shared.Avatar;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
