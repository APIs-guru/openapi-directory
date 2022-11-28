import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorStatistics } from "./errorstatistics";
import { FaultStatistics } from "./faultstatistics";
/**
 * Response statistics for a service.
**/
export declare class ServiceStatistics extends SpeakeasyBase {
    errorStatistics?: ErrorStatistics;
    faultStatistics?: FaultStatistics;
    okCount?: number;
    totalCount?: number;
    totalResponseTime?: number;
}
