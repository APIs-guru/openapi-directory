import { SpeakeasyBase } from "../../../internal/utils";
import { DomainConfiguration } from "./domainconfiguration";
import { DomainInfo } from "./domaininfo";
/**
 * Contains details of a domain.
**/
export declare class DomainDetail extends SpeakeasyBase {
    configuration: DomainConfiguration;
    domainInfo: DomainInfo;
}
