import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails
/** 
 * Configuration options for zone awareness.
**/
export class AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZoneCount" })
  availabilityZoneCount?: number;
}
