import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



// OrderableClusterOption
/** 
 * Describes an orderable cluster option.
**/
export class OrderableClusterOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata()
  clusterType?: string;

  @SpeakeasyMetadata()
  clusterVersion?: string;

  @SpeakeasyMetadata()
  nodeType?: string;
}
