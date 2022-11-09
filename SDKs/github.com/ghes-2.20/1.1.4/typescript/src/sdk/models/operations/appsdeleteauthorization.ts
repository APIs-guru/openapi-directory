import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsDeleteAuthorizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsDeleteAuthorizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;
}


export class AppsDeleteAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsDeleteAuthorizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AppsDeleteAuthorizationRequestBody;
}


export class AppsDeleteAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationError?: shared.ValidationError;
}
