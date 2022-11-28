import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";



export class ListContactsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Contacts", elemType: Contact })
  contacts?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
