import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailabilityZone
/** 
 * Information about an Availability Zone.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=ZoneName" })
  zoneName?: string;
}
