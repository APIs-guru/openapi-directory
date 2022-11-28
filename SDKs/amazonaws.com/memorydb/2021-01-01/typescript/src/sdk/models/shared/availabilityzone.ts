import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailabilityZone
/** 
 * Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
