import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";



export class StopDbClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbCluster?: DbCluster;
}
