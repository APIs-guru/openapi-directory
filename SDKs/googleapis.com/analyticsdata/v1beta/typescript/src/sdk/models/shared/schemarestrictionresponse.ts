import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveMetricRestriction } from "./activemetricrestriction";


// SchemaRestrictionResponse
/** 
 * The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
**/
export class SchemaRestrictionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeMetricRestrictions", elemType: shared.ActiveMetricRestriction })
  activeMetricRestrictions?: ActiveMetricRestriction[];
}
