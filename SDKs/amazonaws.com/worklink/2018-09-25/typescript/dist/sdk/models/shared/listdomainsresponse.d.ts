import { SpeakeasyBase } from "../../../internal/utils";
import { DomainSummary } from "./domainsummary";
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains?: DomainSummary[];
    nextToken?: string;
}
