import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
import { Currency } from "./currency";
import { Invoice } from "./invoice";
import { PaymentLinkItem } from "./paymentlinkitem";
import { User } from "./user";
export declare class PaymentLink extends SpeakeasyBase {
    accessToken?: string;
    client?: Client;
    clientId?: number;
    currency?: Currency;
    currencyId?: number;
    discountAmount?: number;
    id?: number;
    invoice?: Invoice;
    items?: PaymentLinkItem[];
    number?: string;
    subTotalAmount?: number;
    taxAmount?: number;
    totalAmount?: number;
    user?: User;
    userId?: number;
}
