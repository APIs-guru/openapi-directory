import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsightImpactGraphEdge } from "./insightimpactgraphedge";


// InsightImpactGraphService
/** 
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used. 
**/
export class InsightImpactGraphService extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Edges", elemType: shared.InsightImpactGraphEdge })
  edges?: InsightImpactGraphEdge[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=ReferenceId" })
  referenceId?: number;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
