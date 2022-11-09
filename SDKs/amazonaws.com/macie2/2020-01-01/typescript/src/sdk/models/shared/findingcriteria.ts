import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CriterionAdditionalProperties } from "./criterionadditionalproperties";


// FindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class FindingCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties })
  criterion?: Map<string, CriterionAdditionalProperties>;
}
