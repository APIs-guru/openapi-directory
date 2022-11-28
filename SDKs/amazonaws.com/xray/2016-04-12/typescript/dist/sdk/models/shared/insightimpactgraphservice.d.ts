import { SpeakeasyBase } from "../../../internal/utils";
import { InsightImpactGraphEdge } from "./insightimpactgraphedge";
/**
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
**/
export declare class InsightImpactGraphService extends SpeakeasyBase {
    accountId?: string;
    edges?: InsightImpactGraphEdge[];
    name?: string;
    names?: string[];
    referenceId?: number;
    type?: string;
}
