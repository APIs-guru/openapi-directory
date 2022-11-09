import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderShippingDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address, form, name=Address;" })
  address?: string;

  @Metadata({ data: "json, name=CountryId, form, name=CountryId;" })
  countryId?: number;

  @Metadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=PhoneNumber, form, name=PhoneNumber;" })
  phoneNumber?: string;
}
