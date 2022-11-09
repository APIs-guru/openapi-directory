import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestUserAvatarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class RequestUserAvatarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestUserAvatarPathParams;
}


export class RequestUserAvatarResponse extends SpeakeasyBase {
  @Metadata()
  avatar?: shared.Avatar;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
