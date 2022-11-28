import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that Elasticsearch derives based on <code>VPCOptions</code> for the domain.
**/
export declare class AwsElasticsearchDomainVpcOptions extends SpeakeasyBase {
    availabilityZones?: string[];
    securityGroupIds?: string[];
    subnetIds?: string[];
    vpcId?: string;
}
