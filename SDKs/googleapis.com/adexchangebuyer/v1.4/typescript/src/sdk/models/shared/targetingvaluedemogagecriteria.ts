import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TargetingValueDemogAgeCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=demogAgeCriteriaIds" })
  demogAgeCriteriaIds?: string[];
}
