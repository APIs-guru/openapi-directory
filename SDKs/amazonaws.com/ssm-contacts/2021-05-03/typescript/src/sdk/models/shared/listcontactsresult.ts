import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Contact } from "./contact";


export class ListContactsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Contacts", elemType: shared.Contact })
  contacts?: Contact[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
