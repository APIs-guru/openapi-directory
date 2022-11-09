import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TargetingValueDemogAgeCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=demogAgeCriteriaIds" })
  demogAgeCriteriaIds?: string[];
}
