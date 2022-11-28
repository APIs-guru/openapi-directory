import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=banner_url" })
  bannerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=profile_url" })
  profileUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter" })
  twitter?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
