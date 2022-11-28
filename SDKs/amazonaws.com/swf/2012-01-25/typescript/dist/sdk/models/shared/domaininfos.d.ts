import { SpeakeasyBase } from "../../../internal/utils";
import { DomainInfo } from "./domaininfo";
/**
 * Contains a paginated collection of DomainInfo structures.
**/
export declare class DomainInfos extends SpeakeasyBase {
    domainInfos: DomainInfo[];
    nextPageToken?: string;
}
