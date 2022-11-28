import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestUserAvatarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class RequestUserAvatarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestUserAvatarPathParams;
}


export class RequestUserAvatarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  avatar?: shared.Avatar;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
