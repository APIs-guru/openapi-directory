import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Avatar
/** 
 * User avatar information
**/
export class Avatar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatarUri" })
  avatarUri: string;

  @SpeakeasyMetadata({ data: "json, name=avatarUuid" })
  avatarUuid: string;

  @SpeakeasyMetadata({ data: "json, name=isCustomAvatar" })
  isCustomAvatar: boolean;
}
