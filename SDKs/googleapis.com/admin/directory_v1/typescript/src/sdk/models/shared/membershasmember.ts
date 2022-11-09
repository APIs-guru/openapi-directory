import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MembersHasMember
/** 
 * JSON template for Has Member response in Directory API.
**/
export class MembersHasMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=isMember" })
  isMember?: boolean;
}
