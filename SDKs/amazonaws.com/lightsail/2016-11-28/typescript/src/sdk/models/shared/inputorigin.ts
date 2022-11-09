import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OriginProtocolPolicyEnumEnum } from "./originprotocolpolicyenumenum";
import { RegionNameEnum } from "./regionnameenum";


// InputOrigin
/** 
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>
**/
export class InputOrigin extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocolPolicy" })
  protocolPolicy?: OriginProtocolPolicyEnumEnum;

  @Metadata({ data: "json, name=regionName" })
  regionName?: RegionNameEnum;
}
