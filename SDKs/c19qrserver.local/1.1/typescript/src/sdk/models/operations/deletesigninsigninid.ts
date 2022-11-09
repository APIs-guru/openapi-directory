import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSigninSigninIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=signinId" })
  signinId: number;
}


export class DeleteSigninSigninIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSigninSigninIdPathParams;
}


export class DeleteSigninSigninIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  invalidToken?: shared.InvalidToken;
}
