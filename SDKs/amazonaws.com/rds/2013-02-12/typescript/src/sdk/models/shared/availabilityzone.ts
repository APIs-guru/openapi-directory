import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  provisionedIopsCapable?: boolean;
}
