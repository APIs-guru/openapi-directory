import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailabilityZone
/** 
 * Describes an Availability Zone.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=zoneName" })
  zoneName?: string;
}
