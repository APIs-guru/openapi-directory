import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetAvatarHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ResetAvatarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ResetAvatarHeaders;
}


export class ResetAvatarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  avatar?: shared.Avatar;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
