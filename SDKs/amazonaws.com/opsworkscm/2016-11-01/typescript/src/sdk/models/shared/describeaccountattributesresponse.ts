import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAttribute } from "./accountattribute";


export class DescribeAccountAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AccountAttribute })
  attributes?: AccountAttribute[];
}
