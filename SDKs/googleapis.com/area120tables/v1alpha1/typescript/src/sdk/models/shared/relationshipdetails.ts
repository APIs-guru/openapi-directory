import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationshipDetails
/** 
 * Details about a relationship column.
**/
export class RelationshipDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkedTable" })
  linkedTable?: string;
}
