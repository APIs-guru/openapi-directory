import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerAccessLog
/** 
 * Contains information about the access log configuration for the load balancer.
**/
export class AwsElbLoadBalancerAccessLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmitInterval" })
  emitInterval?: number;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=S3BucketPrefix" })
  s3BucketPrefix?: string;
}
