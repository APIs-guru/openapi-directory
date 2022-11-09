import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactList } from "./contactlist";


export class ListContactListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactLists", elemType: shared.ContactList })
  contactLists?: ContactList[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
