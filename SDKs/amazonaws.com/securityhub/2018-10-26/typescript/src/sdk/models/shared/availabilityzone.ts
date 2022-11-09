import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AvailabilityZone
/** 
 * Information about an Availability Zone.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=ZoneName" })
  zoneName?: string;
}
