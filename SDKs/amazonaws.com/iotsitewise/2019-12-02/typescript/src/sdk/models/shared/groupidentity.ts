import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupIdentity
/** 
 * Contains information for a group identity in an access policy.
**/
export class GroupIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
