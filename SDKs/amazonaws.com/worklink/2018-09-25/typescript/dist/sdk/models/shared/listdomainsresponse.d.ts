import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainSummary } from "./domainsummary";
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains?: DomainSummary[];
    nextToken?: string;
}
