import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactList } from "./contactlist";



export class ListContactListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactLists", elemType: ContactList })
  contactLists?: ContactList[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
