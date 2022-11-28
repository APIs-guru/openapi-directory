import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedPlatform } from "./supportedplatform";



// AvailabilityZone
/** 
 * Describes an availability zone.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: SupportedPlatform })
  supportedPlatforms?: SupportedPlatform[];
}
