import { SpeakeasyBase } from "../../../internal/utils";
import { UserSettings } from "./usersettings";
export declare class UpdateUserProfileRequest extends SpeakeasyBase {
    domainId: string;
    userProfileName: string;
    userSettings?: UserSettings;
}
