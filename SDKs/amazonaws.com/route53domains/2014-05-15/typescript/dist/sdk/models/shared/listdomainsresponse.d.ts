import { SpeakeasyBase } from "../../../internal/utils";
import { DomainSummary } from "./domainsummary";
/**
 * The ListDomains response includes the following elements.
**/
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains: DomainSummary[];
    nextPageMarker?: string;
}
