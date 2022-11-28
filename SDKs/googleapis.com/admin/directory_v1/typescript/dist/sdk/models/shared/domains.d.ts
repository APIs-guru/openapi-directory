import { SpeakeasyBase } from "../../../internal/utils";
import { DomainAlias } from "./domainalias";
export declare class Domains extends SpeakeasyBase {
    creationTime?: string;
    domainAliases?: DomainAlias[];
    domainName?: string;
    etag?: string;
    isPrimary?: boolean;
    kind?: string;
    verified?: boolean;
}
