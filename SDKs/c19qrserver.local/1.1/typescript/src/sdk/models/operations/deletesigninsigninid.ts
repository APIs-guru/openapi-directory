import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSigninSigninIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=signinId" })
  signinId: number;
}


export class DeleteSigninSigninIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSigninSigninIdPathParams;
}


export class DeleteSigninSigninIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  invalidToken?: shared.InvalidToken;
}
