import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";
/**
 * The summary of the domain.
**/
export declare class DomainSummary extends SpeakeasyBase {
    createdTime: Date;
    displayName?: string;
    domainName: string;
    domainStatus: DomainStatusEnum;
}
