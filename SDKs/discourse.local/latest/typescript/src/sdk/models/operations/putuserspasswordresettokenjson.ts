import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutUsersPasswordResetTokenJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class PutUsersPasswordResetTokenJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUsersPasswordResetTokenJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutUsersPasswordResetTokenJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
