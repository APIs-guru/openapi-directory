import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CreateUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateUserRequest;
}


export class CreateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  userData?: shared.UserData;

  @Metadata()
  createUser400ApplicationJsonOneOf?: any;
}
