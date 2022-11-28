import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails
/** 
 * Configuration options for zone awareness.
**/
export class AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZoneCount" })
  availabilityZoneCount?: number;
}
