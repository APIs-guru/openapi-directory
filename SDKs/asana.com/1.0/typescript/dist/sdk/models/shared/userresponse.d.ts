import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceCompact } from "./workspacecompact";
/**
 * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
**/
export declare class UserResponsePhoto extends SpeakeasyBase {
    image1024x1024?: string;
    image128x128?: string;
    image21x21?: string;
    image27x27?: string;
    image36x36?: string;
    image60x60?: string;
}
export declare class UserResponse extends SpeakeasyBase {
    email?: string;
    gid?: string;
    name?: string;
    photo?: UserResponsePhoto;
    resourceType?: string;
    workspaces?: WorkspaceCompact[];
}
