import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveOAuthAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorization_id" })
  authorizationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class RemoveOAuthAuthorizationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveOAuthAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveOAuthAuthorizationPathParams;

  @SpeakeasyMetadata()
  headers: RemoveOAuthAuthorizationHeaders;
}


export class RemoveOAuthAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
