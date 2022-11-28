import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateAuthTokenRestrictions } from "./updateauthtokenrestrictions";
/**
 * Request model for updating general settings
**/
export declare class UpdateGeneralSettings extends SpeakeasyBase {
    authTokenRestrictions?: UpdateAuthTokenRestrictions;
    cryptoEnabled?: boolean;
    emailNotificationButtonEnabled?: boolean;
    eulaEnabled?: boolean;
    hideLoginInputFields?: boolean;
    mediaServerEnabled?: boolean;
    s3TagsEnabled?: boolean;
    sharePasswordSmsEnabled?: boolean;
    weakPasswordEnabled?: boolean;
}
