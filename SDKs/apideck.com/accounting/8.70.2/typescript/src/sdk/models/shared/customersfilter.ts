import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomersFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=company_name" })
  companyName?: string;

  @Metadata({ data: "queryParam, name=display_name" })
  displayName?: string;

  @Metadata({ data: "queryParam, name=email" })
  email?: string;

  @Metadata({ data: "queryParam, name=first_name" })
  firstName?: string;

  @Metadata({ data: "queryParam, name=last_name" })
  lastName?: string;
}
