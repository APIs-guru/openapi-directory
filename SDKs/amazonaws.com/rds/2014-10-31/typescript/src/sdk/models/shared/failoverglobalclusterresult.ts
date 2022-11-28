import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalCluster } from "./globalcluster";



export class FailoverGlobalClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalCluster?: GlobalCluster;
}
