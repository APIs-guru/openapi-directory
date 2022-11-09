import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupIdentity
/** 
 * Contains information for a group identity in an access policy.
**/
export class GroupIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
