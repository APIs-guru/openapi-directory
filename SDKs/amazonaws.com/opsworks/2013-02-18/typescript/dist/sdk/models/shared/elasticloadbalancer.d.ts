import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an Elastic Load Balancing instance.
**/
export declare class ElasticLoadBalancer extends SpeakeasyBase {
    availabilityZones?: string[];
    dnsName?: string;
    ec2InstanceIds?: string[];
    elasticLoadBalancerName?: string;
    layerId?: string;
    region?: string;
    stackId?: string;
    subnetIds?: string[];
    vpcId?: string;
}
