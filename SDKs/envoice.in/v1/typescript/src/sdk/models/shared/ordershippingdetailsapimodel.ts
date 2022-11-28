import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderShippingDetailsApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address, form, name=Address;" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=CountryId, form, name=CountryId;" })
  countryId?: number;

  @SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber, form, name=PhoneNumber;" })
  phoneNumber?: string;
}
