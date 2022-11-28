import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";



export class FailoverDbClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbCluster?: DbCluster;
}
