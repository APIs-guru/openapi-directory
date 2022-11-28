import { SpeakeasyBase } from "../../../internal/utils";
import { AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails } from "./awselasticsearchdomainelasticsearchclusterconfigzoneawarenessconfigdetails";
/**
 * details about the configuration of an Elasticsearch cluster.
**/
export declare class AwsElasticsearchDomainElasticsearchClusterConfigDetails extends SpeakeasyBase {
    dedicatedMasterCount?: number;
    dedicatedMasterEnabled?: boolean;
    dedicatedMasterType?: string;
    instanceCount?: number;
    instanceType?: string;
    zoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;
    zoneAwarenessEnabled?: boolean;
}
