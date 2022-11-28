import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class ModifyClusterMaintenanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
