import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTokenRestrictions } from "./authtokenrestrictions";
/**
 * General settings
**/
export declare class GeneralSettings extends SpeakeasyBase {
    authTokenRestrictions?: AuthTokenRestrictions;
    cryptoEnabled?: boolean;
    emailNotificationButtonEnabled?: boolean;
    eulaEnabled?: boolean;
    hideLoginInputFields?: boolean;
    mediaServerEnabled?: boolean;
    s3TagsEnabled?: boolean;
    sharePasswordSmsEnabled?: boolean;
    useS3Storage?: boolean;
    weakPasswordEnabled?: boolean;
}
