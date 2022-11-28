import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnetAvailabilityZone?: AvailabilityZone;

  @SpeakeasyMetadata()
  subnetIdentifier?: string;

  @SpeakeasyMetadata()
  subnetStatus?: string;
}
