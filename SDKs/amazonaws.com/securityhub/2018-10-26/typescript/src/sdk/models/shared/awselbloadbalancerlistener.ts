import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLoadBalancerListener
/** 
 * Information about a load balancer listener.
**/
export class AwsElbLoadBalancerListener extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstancePort" })
  instancePort?: number;

  @Metadata({ data: "json, name=InstanceProtocol" })
  instanceProtocol?: string;

  @Metadata({ data: "json, name=LoadBalancerPort" })
  loadBalancerPort?: number;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=SslCertificateId" })
  sslCertificateId?: string;
}
