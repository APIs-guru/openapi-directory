import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InsightImpactGraphEdge
/** 
 * The connection between two service in an insight impact graph.
**/
export class InsightImpactGraphEdge extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReferenceId" })
  referenceId?: number;
}
