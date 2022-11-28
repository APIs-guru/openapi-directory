import { SpeakeasyBase } from "../../../internal/utils";
import { ResultRow } from "./resultrow";
/**
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
**/
export declare class BaseKpiResult extends SpeakeasyBase {
    rows: ResultRow[];
}
