import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicy } from "./resourcepolicy";



export class GetResourcePoliciesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcePolicies", elemType: ResourcePolicy })
  resourcePolicies: ResourcePolicy[];
}
