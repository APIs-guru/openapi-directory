import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePolicy } from "./devicepolicy";



// Condition
/** 
 * A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
**/
export class Condition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy?: DevicePolicy;

  @SpeakeasyMetadata({ data: "json, name=ipSubnetworks" })
  ipSubnetworks?: string[];

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string[];

  @SpeakeasyMetadata({ data: "json, name=negate" })
  negate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];

  @SpeakeasyMetadata({ data: "json, name=requiredAccessLevels" })
  requiredAccessLevels?: string[];
}
