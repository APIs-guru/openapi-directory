import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AvailabilityZoneDetail
/** 
 * A list of Availability Zones corresponding to the segments in a trace.
**/
export class AvailabilityZoneDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
