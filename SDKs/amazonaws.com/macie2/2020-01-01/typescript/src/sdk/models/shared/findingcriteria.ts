import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CriterionAdditionalProperties } from "./criterionadditionalproperties";



// FindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class FindingCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criterion", elemType: CriterionAdditionalProperties })
  criterion?: Map<string, CriterionAdditionalProperties>;
}
