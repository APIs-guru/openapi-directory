import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSigninSigninIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=signinId" })
  signinId: number;
}


export class GetSigninSigninIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSigninSigninIdPathParams;
}


export class GetSigninSigninIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;

  @SpeakeasyMetadata()
  signin?: shared.Signin;
}
