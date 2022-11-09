import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestAvatarHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestAvatarRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestAvatarHeaders;
}


export class RequestAvatarResponse extends SpeakeasyBase {
  @Metadata()
  avatar?: shared.Avatar;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
