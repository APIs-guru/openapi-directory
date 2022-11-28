import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class DeleteClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
