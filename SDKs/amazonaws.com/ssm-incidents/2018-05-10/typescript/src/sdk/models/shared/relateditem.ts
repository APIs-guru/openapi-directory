import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemIdentifier } from "./itemidentifier";


// RelatedItem
/** 
 * Resources that responders use to triage and mitigate the incident.
**/
export class RelatedItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier: ItemIdentifier;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
