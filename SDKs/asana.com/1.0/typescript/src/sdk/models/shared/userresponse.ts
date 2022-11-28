import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceCompact } from "./workspacecompact";



// UserResponsePhoto
/** 
 * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
**/
export class UserResponsePhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image_1024x1024" })
  image1024x1024?: string;

  @SpeakeasyMetadata({ data: "json, name=image_128x128" })
  image128x128?: string;

  @SpeakeasyMetadata({ data: "json, name=image_21x21" })
  image21x21?: string;

  @SpeakeasyMetadata({ data: "json, name=image_27x27" })
  image27x27?: string;

  @SpeakeasyMetadata({ data: "json, name=image_36x36" })
  image36x36?: string;

  @SpeakeasyMetadata({ data: "json, name=image_60x60" })
  image60x60?: string;
}


export class UserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=photo" })
  photo?: UserResponsePhoto;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaces", elemType: WorkspaceCompact })
  workspaces?: WorkspaceCompact[];
}
