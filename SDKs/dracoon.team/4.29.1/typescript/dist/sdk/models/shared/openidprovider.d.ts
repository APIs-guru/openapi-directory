import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OpenID Connect provider information
**/
export declare class OpenIdProvider extends SpeakeasyBase {
    id: number;
    isGlobalAvailable: boolean;
    issuer: string;
    mappingClaim: string;
    name: string;
    userManagementUrl?: string;
}
