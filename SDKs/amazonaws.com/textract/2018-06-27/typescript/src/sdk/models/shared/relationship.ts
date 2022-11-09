import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelationshipTypeEnum } from "./relationshiptypeenum";


// Relationship
/** 
 * <p>Information about how blocks are related to each other. A <code>Block</code> object contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For more information, see <a>Block</a>.</p> <p>The <code>Type</code> element provides the type of the relationship for all blocks in the <code>IDs</code> array. </p>
**/
export class Relationship extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ids" })
  ids?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: RelationshipTypeEnum;
}
