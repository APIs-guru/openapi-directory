import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressId" })
  addressId: string;
}
