import { SpeakeasyBase } from "../../../internal/utils";
import { DomainDetails } from "./domaindetails";
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains?: DomainDetails[];
    nextToken?: string;
}
