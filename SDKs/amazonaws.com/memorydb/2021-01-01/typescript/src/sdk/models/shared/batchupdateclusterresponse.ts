import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cluster } from "./cluster";
import { UnprocessedCluster } from "./unprocessedcluster";


export class BatchUpdateClusterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProcessedClusters", elemType: shared.Cluster })
  processedClusters?: Cluster[];

  @Metadata({ data: "json, name=UnprocessedClusters", elemType: shared.UnprocessedCluster })
  unprocessedClusters?: UnprocessedCluster[];
}
