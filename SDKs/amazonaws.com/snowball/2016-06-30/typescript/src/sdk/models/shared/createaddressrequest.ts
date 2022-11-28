import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class CreateAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address: Address;
}
