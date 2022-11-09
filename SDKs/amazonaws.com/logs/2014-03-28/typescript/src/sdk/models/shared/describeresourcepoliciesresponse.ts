import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourcePolicy } from "./resourcepolicy";


export class DescribeResourcePoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourcePolicies", elemType: shared.ResourcePolicy })
  resourcePolicies?: ResourcePolicy[];
}
