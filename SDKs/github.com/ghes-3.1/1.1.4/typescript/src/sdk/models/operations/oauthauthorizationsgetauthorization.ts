import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OauthAuthorizationsGetAuthorizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorization_id" })
  authorizationId: number;
}


export class OauthAuthorizationsGetAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OauthAuthorizationsGetAuthorizationPathParams;
}


export class OauthAuthorizationsGetAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorization?: shared.Authorization;

  @Metadata()
  basicError?: shared.BasicError;
}
