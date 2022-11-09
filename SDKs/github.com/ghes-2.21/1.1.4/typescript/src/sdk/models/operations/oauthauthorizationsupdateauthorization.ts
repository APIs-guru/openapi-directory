import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OauthAuthorizationsUpdateAuthorizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorization_id" })
  authorizationId: number;
}


export class OauthAuthorizationsUpdateAuthorizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_scopes" })
  addScopes?: string[];

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=note_url" })
  noteUrl?: string;

  @Metadata({ data: "json, name=remove_scopes" })
  removeScopes?: string[];

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class OauthAuthorizationsUpdateAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OauthAuthorizationsUpdateAuthorizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OauthAuthorizationsUpdateAuthorizationRequestBody;
}


export class OauthAuthorizationsUpdateAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorization?: shared.Authorization;

  @Metadata()
  validationError?: shared.ValidationError;
}
