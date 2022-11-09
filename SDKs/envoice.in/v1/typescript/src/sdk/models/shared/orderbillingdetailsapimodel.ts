import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderBillingDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=CountryId" })
  countryId?: number;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;
}
