import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsDeleteAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorization_id" })
  authorizationId: number;
}


export class OauthAuthorizationsDeleteAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsDeleteAuthorizationPathParams;
}


export class OauthAuthorizationsDeleteAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
