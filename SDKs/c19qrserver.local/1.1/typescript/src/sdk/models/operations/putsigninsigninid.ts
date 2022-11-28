import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSigninSigninIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=signinId" })
  signinId: number;
}


export class PutSigninSigninIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSigninSigninIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Signin;
}


export class PutSigninSigninIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;

  @SpeakeasyMetadata()
  userRecord?: shared.UserRecord;
}
