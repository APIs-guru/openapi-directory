import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provided if <code>ActionType</code> is <code>DNS_REQUEST</code>. It provides details about the DNS request that was detected.
**/
export declare class DnsRequestAction extends SpeakeasyBase {
    blocked?: boolean;
    domain?: string;
    protocol?: string;
}
