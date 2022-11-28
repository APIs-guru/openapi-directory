import { SpeakeasyBase } from "../../../internal/utils";
import { Soa } from "./soa";
/**
 * A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
**/
export declare class DnsProperties extends SpeakeasyBase {
    hostedZoneId?: string;
    soa?: Soa;
}
