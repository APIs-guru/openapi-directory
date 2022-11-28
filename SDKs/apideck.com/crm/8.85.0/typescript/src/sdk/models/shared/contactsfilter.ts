import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContactsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=name" })
  name?: string;
}
