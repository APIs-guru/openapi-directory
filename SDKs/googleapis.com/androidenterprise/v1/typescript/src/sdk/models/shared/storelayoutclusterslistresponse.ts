import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoreCluster } from "./storecluster";



export class StoreLayoutClustersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster", elemType: StoreCluster })
  cluster?: StoreCluster[];
}
