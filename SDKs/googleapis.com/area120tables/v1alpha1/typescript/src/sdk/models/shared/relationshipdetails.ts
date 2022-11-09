import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelationshipDetails
/** 
 * Details about a relationship column.
**/
export class RelationshipDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkedTable" })
  linkedTable?: string;
}
