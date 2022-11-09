import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactList
/** 
 * A list that contains contacts that have subscribed to a particular topic or topics.
**/
export class ContactList extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactListName" })
  contactListName?: string;

  @Metadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;
}
