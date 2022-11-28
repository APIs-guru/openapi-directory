import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptTypeEnum } from "./receipttypeenum";
/**
 * Records events during an engagement.
**/
export declare class Receipt extends SpeakeasyBase {
    contactChannelArn?: string;
    receiptInfo?: string;
    receiptTime: Date;
    receiptType: ReceiptTypeEnum;
}
