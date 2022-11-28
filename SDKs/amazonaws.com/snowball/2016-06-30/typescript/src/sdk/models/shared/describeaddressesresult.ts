import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class DescribeAddressesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
