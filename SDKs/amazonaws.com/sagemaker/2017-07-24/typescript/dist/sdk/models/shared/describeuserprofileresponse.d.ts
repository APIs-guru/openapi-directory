import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfileStatusEnum } from "./userprofilestatusenum";
import { UserSettings } from "./usersettings";
export declare class DescribeUserProfileResponse extends SpeakeasyBase {
    creationTime?: Date;
    domainId?: string;
    failureReason?: string;
    homeEfsFileSystemUid?: string;
    lastModifiedTime?: Date;
    singleSignOnUserIdentifier?: string;
    singleSignOnUserValue?: string;
    status?: UserProfileStatusEnum;
    userProfileArn?: string;
    userProfileName?: string;
    userSettings?: UserSettings;
}
