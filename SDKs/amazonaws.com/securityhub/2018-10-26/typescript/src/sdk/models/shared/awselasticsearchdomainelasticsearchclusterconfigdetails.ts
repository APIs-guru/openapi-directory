import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails } from "./awselasticsearchdomainelasticsearchclusterconfigzoneawarenessconfigdetails";


// AwsElasticsearchDomainElasticsearchClusterConfigDetails
/** 
 * details about the configuration of an Elasticsearch cluster.
**/
export class AwsElasticsearchDomainElasticsearchClusterConfigDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedMasterCount" })
  dedicatedMasterCount?: number;

  @Metadata({ data: "json, name=DedicatedMasterEnabled" })
  dedicatedMasterEnabled?: boolean;

  @Metadata({ data: "json, name=DedicatedMasterType" })
  dedicatedMasterType?: string;

  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount?: number;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=ZoneAwarenessConfig" })
  zoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;

  @Metadata({ data: "json, name=ZoneAwarenessEnabled" })
  zoneAwarenessEnabled?: boolean;
}
