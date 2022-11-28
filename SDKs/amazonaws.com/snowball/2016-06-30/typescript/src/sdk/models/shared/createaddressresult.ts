import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAddressResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressId" })
  addressId?: string;
}
