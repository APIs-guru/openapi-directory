import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Address
/** 
 * The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressId" })
  addressId?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Company" })
  company?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=IsRestricted" })
  isRestricted?: boolean;

  @Metadata({ data: "json, name=Landmark" })
  landmark?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=PrefectureOrDistrict" })
  prefectureOrDistrict?: string;

  @Metadata({ data: "json, name=StateOrProvince" })
  stateOrProvince?: string;

  @Metadata({ data: "json, name=Street1" })
  street1?: string;

  @Metadata({ data: "json, name=Street2" })
  street2?: string;

  @Metadata({ data: "json, name=Street3" })
  street3?: string;
}
