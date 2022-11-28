import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsDeleteAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsDeleteAuthorizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;
}


export class AppsDeleteAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsDeleteAuthorizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AppsDeleteAuthorizationRequestBody;
}


export class AppsDeleteAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
