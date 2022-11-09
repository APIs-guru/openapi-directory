import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


export class CreateAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address: Address;
}
