import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";



export class CreateDbClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbCluster?: DbCluster;
}
