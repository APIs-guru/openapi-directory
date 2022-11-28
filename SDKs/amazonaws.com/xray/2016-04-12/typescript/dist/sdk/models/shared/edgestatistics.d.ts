import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorStatistics } from "./errorstatistics";
import { FaultStatistics } from "./faultstatistics";
/**
 * Response statistics for an edge.
**/
export declare class EdgeStatistics extends SpeakeasyBase {
    errorStatistics?: ErrorStatistics;
    faultStatistics?: FaultStatistics;
    okCount?: number;
    totalCount?: number;
    totalResponseTime?: number;
}
