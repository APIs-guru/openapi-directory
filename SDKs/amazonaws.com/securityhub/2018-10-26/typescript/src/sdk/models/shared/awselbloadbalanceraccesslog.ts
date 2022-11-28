import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerAccessLog
/** 
 * Contains information about the access log configuration for the load balancer.
**/
export class AwsElbLoadBalancerAccessLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmitInterval" })
  emitInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketPrefix" })
  s3BucketPrefix?: string;
}
