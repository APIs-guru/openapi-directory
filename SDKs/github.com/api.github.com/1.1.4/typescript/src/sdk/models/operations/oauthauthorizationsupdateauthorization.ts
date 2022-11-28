import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OauthAuthorizationsUpdateAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorization_id" })
  authorizationId: number;
}


export class OauthAuthorizationsUpdateAuthorizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_scopes" })
  addScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=note_url" })
  noteUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=remove_scopes" })
  removeScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class OauthAuthorizationsUpdateAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsUpdateAuthorizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OauthAuthorizationsUpdateAuthorizationRequestBody;
}


export class OauthAuthorizationsUpdateAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
