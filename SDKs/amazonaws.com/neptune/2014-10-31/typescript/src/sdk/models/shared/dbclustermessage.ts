import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";



export class DbClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbCluster })
  dbClusters?: DbCluster[];

  @SpeakeasyMetadata()
  marker?: string;
}
