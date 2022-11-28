import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { UserSettings } from "./usersettings";
export declare class CreateUserProfileRequest extends SpeakeasyBase {
    domainId: string;
    singleSignOnUserIdentifier?: string;
    singleSignOnUserValue?: string;
    tags?: Tag[];
    userProfileName: string;
    userSettings?: UserSettings;
}
