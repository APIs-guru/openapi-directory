import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StoreCluster } from "./storecluster";


export class StoreLayoutClustersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster", elemType: shared.StoreCluster })
  cluster?: StoreCluster[];
}
