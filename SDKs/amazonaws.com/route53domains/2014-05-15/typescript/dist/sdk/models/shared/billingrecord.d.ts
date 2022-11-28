import { SpeakeasyBase } from "../../../internal/utils";
import { OperationTypeEnum } from "./operationtypeenum";
/**
 * Information for one billing record.
**/
export declare class BillingRecord extends SpeakeasyBase {
    billDate?: Date;
    domainName?: string;
    invoiceId?: string;
    operation?: OperationTypeEnum;
    price?: number;
}
