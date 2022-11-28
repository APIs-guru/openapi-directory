import { SpeakeasyBase } from "../../../internal/utils";
import { OriginProtocolPolicyEnumEnum } from "./originprotocolpolicyenumenum";
import { RegionNameEnum } from "./regionnameenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * <p>Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>An origin can be a Lightsail instance or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers via a worldwide network of edge servers.</p>
**/
export declare class Origin extends SpeakeasyBase {
    name?: string;
    protocolPolicy?: OriginProtocolPolicyEnumEnum;
    regionName?: RegionNameEnum;
    resourceType?: ResourceTypeEnum;
}
