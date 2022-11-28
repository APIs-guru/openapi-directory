import { SpeakeasyBase } from "../../../internal/utils";
import { AlertMetadata } from "./alertmetadata";
/**
 * An alert affecting a customer.
**/
export declare class Alert extends SpeakeasyBase {
    alertId?: string;
    createTime?: string;
    customerId?: string;
    data?: Map<string, any>;
    deleted?: boolean;
    endTime?: string;
    etag?: string;
    metadata?: AlertMetadata;
    securityInvestigationToolLink?: string;
    source?: string;
    startTime?: string;
    type?: string;
    updateTime?: string;
}
