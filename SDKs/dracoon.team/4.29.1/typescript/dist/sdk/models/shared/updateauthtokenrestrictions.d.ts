import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating auth token settings
**/
export declare class UpdateAuthTokenRestrictions extends SpeakeasyBase {
    accessTokenValidity?: number;
    overwriteEnabled: boolean;
    refreshTokenValidity?: number;
}
