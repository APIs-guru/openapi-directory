import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Avatar
/** 
 * User avatar information
**/
export class Avatar extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatarUri" })
  avatarUri: string;

  @Metadata({ data: "json, name=avatarUuid" })
  avatarUuid: string;

  @Metadata({ data: "json, name=isCustomAvatar" })
  isCustomAvatar: boolean;
}
