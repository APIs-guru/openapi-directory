import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSigninSigninIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=signinId" })
  signinId: number;
}


export class PutSigninSigninIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSigninSigninIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Signin;
}


export class PutSigninSigninIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;

  @Metadata()
  userRecord?: shared.UserRecord;
}
