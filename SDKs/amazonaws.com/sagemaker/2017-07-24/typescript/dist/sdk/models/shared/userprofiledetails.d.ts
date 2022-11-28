import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfileStatusEnum } from "./userprofilestatusenum";
/**
 * The user profile details.
**/
export declare class UserProfileDetails extends SpeakeasyBase {
    creationTime?: Date;
    domainId?: string;
    lastModifiedTime?: Date;
    status?: UserProfileStatusEnum;
    userProfileName?: string;
}
