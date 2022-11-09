import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Cluster } from "./cluster";
import { UnprocessedCluster } from "./unprocessedcluster";
export declare class BatchUpdateClusterResponse extends SpeakeasyBase {
    processedClusters?: Cluster[];
    unprocessedClusters?: UnprocessedCluster[];
}
