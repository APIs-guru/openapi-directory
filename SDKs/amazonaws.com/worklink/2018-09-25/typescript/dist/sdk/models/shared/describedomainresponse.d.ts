import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainStatusEnum } from "./domainstatusenum";
export declare class DescribeDomainResponse extends SpeakeasyBase {
    acmCertificateArn?: string;
    createdTime?: Date;
    displayName?: string;
    domainName?: string;
    domainStatus?: DomainStatusEnum;
}
