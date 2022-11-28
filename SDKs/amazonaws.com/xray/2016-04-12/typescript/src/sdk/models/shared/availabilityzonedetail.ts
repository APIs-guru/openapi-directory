import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailabilityZoneDetail
/** 
 * A list of Availability Zones corresponding to the segments in a trace.
**/
export class AvailabilityZoneDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
