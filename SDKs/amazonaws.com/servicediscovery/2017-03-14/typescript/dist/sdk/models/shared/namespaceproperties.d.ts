import { SpeakeasyBase } from "../../../internal/utils";
import { DnsProperties } from "./dnsproperties";
import { HttpProperties } from "./httpproperties";
/**
 * A complex type that contains information that's specific to the namespace type.
**/
export declare class NamespaceProperties extends SpeakeasyBase {
    dnsProperties?: DnsProperties;
    httpProperties?: HttpProperties;
}
