import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeUserPasswordHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ChangeUserPasswordRequest extends SpeakeasyBase {
  @Metadata()
  headers: ChangeUserPasswordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChangeUserPasswordRequest;
}


export class ChangeUserPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  changeUserPassword400ApplicationJsonOneOf?: any;
}
