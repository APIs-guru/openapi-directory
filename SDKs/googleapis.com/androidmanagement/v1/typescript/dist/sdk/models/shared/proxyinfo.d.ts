import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.
**/
export declare class ProxyInfo extends SpeakeasyBase {
    excludedHosts?: string[];
    host?: string;
    pacUri?: string;
    port?: number;
}
