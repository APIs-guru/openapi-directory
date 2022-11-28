import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAvailabilityZone } from "./customavailabilityzone";



export class CustomAvailabilityZoneMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CustomAvailabilityZone })
  customAvailabilityZones?: CustomAvailabilityZone[];

  @SpeakeasyMetadata()
  marker?: string;
}
