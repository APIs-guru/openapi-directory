import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MembersHasMember
/** 
 * JSON template for Has Member response in Directory API.
**/
export class MembersHasMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isMember" })
  isMember?: boolean;
}
