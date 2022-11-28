import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalCluster } from "./globalcluster";



export class GlobalClustersMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GlobalCluster })
  globalClusters?: GlobalCluster[];

  @SpeakeasyMetadata()
  marker?: string;
}
