import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAttribute } from "./accountattribute";



export class DescribeAccountAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AccountAttribute })
  attributes?: AccountAttribute[];
}
