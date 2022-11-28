import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemIdentifier } from "./itemidentifier";



// RelatedItem
/** 
 * Resources that responders use to triage and mitigate the incident.
**/
export class RelatedItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: ItemIdentifier;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
