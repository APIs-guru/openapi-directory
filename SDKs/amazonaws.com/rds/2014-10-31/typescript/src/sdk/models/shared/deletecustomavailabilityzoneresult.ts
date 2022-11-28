import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAvailabilityZone } from "./customavailabilityzone";



export class DeleteCustomAvailabilityZoneResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customAvailabilityZone?: CustomAvailabilityZone;
}
