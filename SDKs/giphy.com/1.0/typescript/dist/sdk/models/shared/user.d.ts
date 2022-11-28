import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
**/
export declare class User extends SpeakeasyBase {
    avatarUrl?: string;
    bannerUrl?: string;
    displayName?: string;
    profileUrl?: string;
    twitter?: string;
    username?: string;
}
