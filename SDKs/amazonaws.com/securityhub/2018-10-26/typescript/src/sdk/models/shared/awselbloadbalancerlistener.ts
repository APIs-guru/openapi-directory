import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLoadBalancerListener
/** 
 * Information about a load balancer listener.
**/
export class AwsElbLoadBalancerListener extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstancePort" })
  instancePort?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceProtocol" })
  instanceProtocol?: string;

  @SpeakeasyMetadata({ data: "json, name=LoadBalancerPort" })
  loadBalancerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=SslCertificateId" })
  sslCertificateId?: string;
}
