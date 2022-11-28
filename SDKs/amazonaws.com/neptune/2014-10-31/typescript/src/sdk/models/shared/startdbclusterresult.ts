import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";



export class StartDbClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbCluster?: DbCluster;
}
