import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserCompact } from "./usercompact";


// Like
/** 
 * An object to represent a user's like.
**/
export class Like extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=user" })
  user?: UserCompact;
}
