import { SpeakeasyBase } from "../../../internal/utils";
import { DomainMapping } from "./domainmapping";
/**
 * Response message for DomainMappings.ListDomainMappings.
**/
export declare class ListDomainMappingsResponse extends SpeakeasyBase {
    domainMappings?: DomainMapping[];
    nextPageToken?: string;
}
