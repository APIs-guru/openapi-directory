import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAddressRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressId" })
  addressId: string;
}
