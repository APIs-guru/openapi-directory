import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactList
/** 
 * A list that contains contacts that have subscribed to a particular topic or topics.
**/
export class ContactList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactListName" })
  contactListName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;
}
