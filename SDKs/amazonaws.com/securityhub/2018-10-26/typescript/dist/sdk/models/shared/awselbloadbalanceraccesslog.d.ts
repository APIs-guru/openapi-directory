import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the access log configuration for the load balancer.
**/
export declare class AwsElbLoadBalancerAccessLog extends SpeakeasyBase {
    emitInterval?: number;
    enabled?: boolean;
    s3BucketName?: string;
    s3BucketPrefix?: string;
}
