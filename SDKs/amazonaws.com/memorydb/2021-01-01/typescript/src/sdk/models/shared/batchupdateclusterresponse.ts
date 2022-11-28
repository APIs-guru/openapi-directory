import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
import { UnprocessedCluster } from "./unprocessedcluster";



export class BatchUpdateClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProcessedClusters", elemType: Cluster })
  processedClusters?: Cluster[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedClusters", elemType: UnprocessedCluster })
  unprocessedClusters?: UnprocessedCluster[];
}
