import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicy } from "./resourcepolicy";
export declare class DescribeResourcePoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourcePolicies?: ResourcePolicy[];
}
