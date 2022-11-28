import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Acl } from "./acl";



export class DescribeAcLsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLs", elemType: Acl })
  acLs?: Acl[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
