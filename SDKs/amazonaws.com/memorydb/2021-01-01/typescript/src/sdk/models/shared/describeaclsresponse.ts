import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Acl } from "./acl";


export class DescribeAcLsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLs", elemType: shared.Acl })
  acLs?: Acl[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
