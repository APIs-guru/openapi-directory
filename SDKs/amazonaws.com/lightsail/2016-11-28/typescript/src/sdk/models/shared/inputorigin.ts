import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginProtocolPolicyEnumEnum } from "./originprotocolpolicyenumenum";
import { RegionNameEnum } from "./regionnameenum";



// InputOrigin
/** 
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>
**/
export class InputOrigin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocolPolicy" })
  protocolPolicy?: OriginProtocolPolicyEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=regionName" })
  regionName?: RegionNameEnum;
}
