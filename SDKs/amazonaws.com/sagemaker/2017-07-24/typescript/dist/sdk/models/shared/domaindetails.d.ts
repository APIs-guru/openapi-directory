import { SpeakeasyBase } from "../../../internal/utils";
import { DomainStatusEnum } from "./domainstatusenum";
/**
 * The domain's details.
**/
export declare class DomainDetails extends SpeakeasyBase {
    creationTime?: Date;
    domainArn?: string;
    domainId?: string;
    domainName?: string;
    lastModifiedTime?: Date;
    status?: DomainStatusEnum;
    url?: string;
}
