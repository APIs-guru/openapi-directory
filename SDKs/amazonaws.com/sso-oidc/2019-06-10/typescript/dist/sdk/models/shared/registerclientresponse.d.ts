import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RegisterClientResponse extends SpeakeasyBase {
    authorizationEndpoint?: string;
    clientId?: string;
    clientIdIssuedAt?: number;
    clientSecret?: string;
    clientSecretExpiresAt?: number;
    tokenEndpoint?: string;
}
