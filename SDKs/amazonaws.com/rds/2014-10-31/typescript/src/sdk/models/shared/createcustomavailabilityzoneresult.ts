import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAvailabilityZone } from "./customavailabilityzone";



export class CreateCustomAvailabilityZoneResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customAvailabilityZone?: CustomAvailabilityZone;
}
