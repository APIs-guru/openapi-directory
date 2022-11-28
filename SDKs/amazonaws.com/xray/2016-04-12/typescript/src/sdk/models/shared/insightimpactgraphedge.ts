import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightImpactGraphEdge
/** 
 * The connection between two service in an insight impact graph.
**/
export class InsightImpactGraphEdge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: number;
}
