import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AvailabilityZone
/** 
 * Describes an Availability Zone.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=zoneName" })
  zoneName?: string;
}
