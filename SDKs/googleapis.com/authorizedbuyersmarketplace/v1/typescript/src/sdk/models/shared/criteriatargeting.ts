import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CriteriaTargeting
/** 
 * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
**/
export class CriteriaTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedCriteriaIds" })
  excludedCriteriaIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetedCriteriaIds" })
  targetedCriteriaIds?: string[];
}
