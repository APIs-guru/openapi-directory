import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationshipTypeEnum } from "./relationshiptypeenum";



// Relationship
/** 
 * <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>
**/
export class Relationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RelationshipTypeEnum;
}
