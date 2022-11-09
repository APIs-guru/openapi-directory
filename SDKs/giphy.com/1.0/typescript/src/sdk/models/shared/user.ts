import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// User
/** 
 * The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=banner_url" })
  bannerUrl?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=profile_url" })
  profileUrl?: string;

  @Metadata({ data: "json, name=twitter" })
  twitter?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
