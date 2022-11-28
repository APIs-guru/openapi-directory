import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightImpactGraphEdge } from "./insightimpactgraphedge";



// InsightImpactGraphService
/** 
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used. 
**/
export class InsightImpactGraphService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Edges", elemType: InsightImpactGraphEdge })
  edges?: InsightImpactGraphEdge[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
