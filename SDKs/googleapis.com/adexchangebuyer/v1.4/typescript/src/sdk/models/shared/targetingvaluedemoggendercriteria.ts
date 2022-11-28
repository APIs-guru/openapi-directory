import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TargetingValueDemogGenderCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=demogGenderCriteriaIds" })
  demogGenderCriteriaIds?: string[];
}
