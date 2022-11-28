import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails } from "./awselasticsearchdomainelasticsearchclusterconfigzoneawarenessconfigdetails";



// AwsElasticsearchDomainElasticsearchClusterConfigDetails
/** 
 * details about the configuration of an Elasticsearch cluster.
**/
export class AwsElasticsearchDomainElasticsearchClusterConfigDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedMasterCount" })
  dedicatedMasterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DedicatedMasterEnabled" })
  dedicatedMasterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DedicatedMasterType" })
  dedicatedMasterType?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=ZoneAwarenessConfig" })
  zoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;

  @SpeakeasyMetadata({ data: "json, name=ZoneAwarenessEnabled" })
  zoneAwarenessEnabled?: boolean;
}
