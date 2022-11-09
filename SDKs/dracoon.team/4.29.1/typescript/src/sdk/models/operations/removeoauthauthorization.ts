import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveOAuthAuthorizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorization_id" })
  authorizationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class RemoveOAuthAuthorizationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveOAuthAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveOAuthAuthorizationPathParams;

  @Metadata()
  headers: RemoveOAuthAuthorizationHeaders;
}


export class RemoveOAuthAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
