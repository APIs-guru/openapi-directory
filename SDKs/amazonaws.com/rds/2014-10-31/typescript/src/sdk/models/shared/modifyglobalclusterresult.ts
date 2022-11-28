import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalCluster } from "./globalcluster";



export class ModifyGlobalClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalCluster?: GlobalCluster;
}
