import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetAddress } from "./targetaddress";



// ResolverRuleConfig
/** 
 * In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make.
**/
export class ResolverRuleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetIps", elemType: TargetAddress })
  targetIps?: TargetAddress[];
}
