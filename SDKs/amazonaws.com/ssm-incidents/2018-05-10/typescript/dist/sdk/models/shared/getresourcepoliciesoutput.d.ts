import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourcePolicy } from "./resourcepolicy";
export declare class GetResourcePoliciesOutput extends SpeakeasyBase {
    nextToken?: string;
    resourcePolicies: ResourcePolicy[];
}
