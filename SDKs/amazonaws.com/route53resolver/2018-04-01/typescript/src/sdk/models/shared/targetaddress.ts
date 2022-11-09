import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetAddress
/** 
 * In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.
**/
export class TargetAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ip" })
  ip: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;
}
