import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Auth token restrictions
**/
export declare class AuthTokenRestrictions extends SpeakeasyBase {
    accessTokenValidity?: number;
    refreshTokenValidity?: number;
    restrictionEnabled?: boolean;
}
