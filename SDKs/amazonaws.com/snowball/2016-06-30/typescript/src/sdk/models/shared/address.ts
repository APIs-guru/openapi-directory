import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Address
/** 
 * The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressId" })
  addressId?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=IsRestricted" })
  isRestricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Landmark" })
  landmark?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=PrefectureOrDistrict" })
  prefectureOrDistrict?: string;

  @SpeakeasyMetadata({ data: "json, name=StateOrProvince" })
  stateOrProvince?: string;

  @SpeakeasyMetadata({ data: "json, name=Street1" })
  street1?: string;

  @SpeakeasyMetadata({ data: "json, name=Street2" })
  street2?: string;

  @SpeakeasyMetadata({ data: "json, name=Street3" })
  street3?: string;
}
