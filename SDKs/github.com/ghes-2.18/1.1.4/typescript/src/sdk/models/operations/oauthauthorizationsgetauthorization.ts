import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsGetAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorization_id" })
  authorizationId: number;
}


export class OauthAuthorizationsGetAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsGetAuthorizationPathParams;
}


export class OauthAuthorizationsGetAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
