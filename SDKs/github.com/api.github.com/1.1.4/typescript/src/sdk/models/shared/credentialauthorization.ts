import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CredentialAuthorization
/** 
 * Credential Authorization
**/
export class CredentialAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_credential_id" })
  authorizedCredentialId?: number;

  @Metadata({ data: "json, name=authorized_credential_note" })
  authorizedCredentialNote?: string;

  @Metadata({ data: "json, name=authorized_credential_title" })
  authorizedCredentialTitle?: string;

  @Metadata({ data: "json, name=credential_accessed_at" })
  credentialAccessedAt?: Date;

  @Metadata({ data: "json, name=credential_authorized_at" })
  credentialAuthorizedAt: Date;

  @Metadata({ data: "json, name=credential_id" })
  credentialId: number;

  @Metadata({ data: "json, name=credential_type" })
  credentialType: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=token_last_eight" })
  tokenLastEight?: string;
}
