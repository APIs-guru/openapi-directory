import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CriteriaTargeting
/** 
 * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
**/
export class CriteriaTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedCriteriaIds" })
  excludedCriteriaIds?: string[];

  @Metadata({ data: "json, name=targetedCriteriaIds" })
  targetedCriteriaIds?: string[];
}
