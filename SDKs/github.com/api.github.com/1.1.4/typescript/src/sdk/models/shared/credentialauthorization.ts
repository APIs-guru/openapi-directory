import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CredentialAuthorization
/** 
 * Credential Authorization
**/
export class CredentialAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized_credential_id" })
  authorizedCredentialId?: number;

  @SpeakeasyMetadata({ data: "json, name=authorized_credential_note" })
  authorizedCredentialNote?: string;

  @SpeakeasyMetadata({ data: "json, name=authorized_credential_title" })
  authorizedCredentialTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=credential_accessed_at" })
  credentialAccessedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=credential_authorized_at" })
  credentialAuthorizedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=credential_id" })
  credentialId: number;

  @SpeakeasyMetadata({ data: "json, name=credential_type" })
  credentialType: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=token_last_eight" })
  tokenLastEight?: string;
}
