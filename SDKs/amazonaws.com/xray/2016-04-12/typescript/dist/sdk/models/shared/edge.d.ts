import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { HistogramEntry } from "./histogramentry";
import { EdgeStatistics } from "./edgestatistics";
/**
 * Information about a connection between two services.
**/
export declare class Edge extends SpeakeasyBase {
    aliases?: Alias[];
    endTime?: Date;
    referenceId?: number;
    responseTimeHistogram?: HistogramEntry[];
    startTime?: Date;
    summaryStatistics?: EdgeStatistics;
}
