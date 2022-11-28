import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramEntry } from "./histogramentry";
import { Edge } from "./edge";
import { ServiceStatistics } from "./servicestatistics";
/**
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
**/
export declare class Service extends SpeakeasyBase {
    accountId?: string;
    durationHistogram?: HistogramEntry[];
    edges?: Edge[];
    endTime?: Date;
    name?: string;
    names?: string[];
    referenceId?: number;
    responseTimeHistogram?: HistogramEntry[];
    root?: boolean;
    startTime?: Date;
    state?: string;
    summaryStatistics?: ServiceStatistics;
    type?: string;
}
