import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItvPurchaseStrongRequest extends SpeakeasyBase {
    paymentMethodFromToken?: string;
    paymentMethodId?: string;
    planId: string;
    profileToken: string;
    voucher?: string;
}
