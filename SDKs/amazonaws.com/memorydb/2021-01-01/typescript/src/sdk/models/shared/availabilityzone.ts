import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AvailabilityZone
/** 
 * Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).
**/
export class AvailabilityZone extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
