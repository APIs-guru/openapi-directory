import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAddressResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressId" })
  addressId?: string;
}
