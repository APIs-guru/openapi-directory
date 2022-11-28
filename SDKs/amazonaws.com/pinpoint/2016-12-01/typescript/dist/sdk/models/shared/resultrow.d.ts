import { SpeakeasyBase } from "../../../internal/utils";
import { ResultRowValue } from "./resultrowvalue";
/**
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
**/
export declare class ResultRow extends SpeakeasyBase {
    groupedBys: ResultRowValue[];
    values: ResultRowValue[];
}
