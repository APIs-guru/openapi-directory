import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveMetricRestriction } from "./activemetricrestriction";



// SchemaRestrictionResponse
/** 
 * The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
**/
export class SchemaRestrictionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeMetricRestrictions", elemType: ActiveMetricRestriction })
  activeMetricRestrictions?: ActiveMetricRestriction[];
}
