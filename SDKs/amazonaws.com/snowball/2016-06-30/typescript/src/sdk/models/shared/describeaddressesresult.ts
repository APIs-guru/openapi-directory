import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";


export class DescribeAddressesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
