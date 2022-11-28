import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OAuth client approval information
**/
export declare class OAuthApproval extends SpeakeasyBase {
    clientId: string;
    clientName: string;
    expiresAt?: Date;
}
