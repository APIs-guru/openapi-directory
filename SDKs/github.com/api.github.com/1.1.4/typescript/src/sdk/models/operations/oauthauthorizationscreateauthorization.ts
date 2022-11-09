import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OauthAuthorizationsCreateAuthorizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=note_url" })
  noteUrl?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class OauthAuthorizationsCreateAuthorizationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: OauthAuthorizationsCreateAuthorizationRequestBody;
}


export class OauthAuthorizationsCreateAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorization?: shared.Authorization;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  validationError?: shared.ValidationError;
}
