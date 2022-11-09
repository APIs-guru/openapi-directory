import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSigninSigninIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=signinId" })
  signinId: number;
}


export class GetSigninSigninIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSigninSigninIdPathParams;
}


export class GetSigninSigninIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;

  @Metadata()
  signin?: shared.Signin;
}
