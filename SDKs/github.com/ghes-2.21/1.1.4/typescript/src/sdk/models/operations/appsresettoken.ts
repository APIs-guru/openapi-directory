import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsResetTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class AppsResetTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;
}


export class AppsResetTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsResetTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AppsResetTokenRequestBody;
}


export class AppsResetTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorization?: shared.Authorization;

  @Metadata()
  validationError?: shared.ValidationError;
}
