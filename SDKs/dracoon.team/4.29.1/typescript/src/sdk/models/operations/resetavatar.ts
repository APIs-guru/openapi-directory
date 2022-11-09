import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetAvatarHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ResetAvatarRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResetAvatarHeaders;
}


export class ResetAvatarResponse extends SpeakeasyBase {
  @Metadata()
  avatar?: shared.Avatar;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
