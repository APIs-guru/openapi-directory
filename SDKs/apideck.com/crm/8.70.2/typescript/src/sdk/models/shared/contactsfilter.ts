import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContactsFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=email" })
  email?: string;

  @Metadata({ data: "queryParam, name=first_name" })
  firstName?: string;

  @Metadata({ data: "queryParam, name=last_name" })
  lastName?: string;

  @Metadata({ data: "queryParam, name=name" })
  name?: string;
}
