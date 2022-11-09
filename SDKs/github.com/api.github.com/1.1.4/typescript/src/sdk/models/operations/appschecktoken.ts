import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsCheckTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsCheckTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;
}


export class AppsCheckTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsCheckTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AppsCheckTokenRequestBody;
}


export class AppsCheckTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorization?: shared.Authorization;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  validationError?: shared.ValidationError;
}
