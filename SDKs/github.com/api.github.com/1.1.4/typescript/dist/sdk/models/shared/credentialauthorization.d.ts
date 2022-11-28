import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Credential Authorization
**/
export declare class CredentialAuthorization extends SpeakeasyBase {
    authorizedCredentialId?: number;
    authorizedCredentialNote?: string;
    authorizedCredentialTitle?: string;
    credentialAccessedAt?: Date;
    credentialAuthorizedAt: Date;
    credentialId: number;
    credentialType: string;
    fingerprint?: string;
    login: string;
    scopes?: string[];
    tokenLastEight?: string;
}
