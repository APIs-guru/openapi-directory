import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicy } from "./resourcepolicy";



export class DescribeResourcePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcePolicies", elemType: ResourcePolicy })
  resourcePolicies?: ResourcePolicy[];
}
