import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomersFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=last_name" })
  lastName?: string;
}
