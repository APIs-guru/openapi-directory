import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetAddress } from "./targetaddress";


// ResolverRuleConfig
/** 
 * In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make.
**/
export class ResolverRuleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ResolverEndpointId" })
  resolverEndpointId?: string;

  @Metadata({ data: "json, name=TargetIps", elemType: shared.TargetAddress })
  targetIps?: TargetAddress[];
}
