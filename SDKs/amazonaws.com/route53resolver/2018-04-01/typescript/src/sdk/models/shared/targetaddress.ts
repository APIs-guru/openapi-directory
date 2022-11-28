import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetAddress
/** 
 * In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.
**/
export class TargetAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;
}
