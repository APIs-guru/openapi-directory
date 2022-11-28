import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AddPaymentMethodRequestTypeEnum {
    Card = "Card"
}
export declare class AddPaymentMethodRequest extends SpeakeasyBase {
    makeDefault?: boolean;
    token: string;
    type: AddPaymentMethodRequestTypeEnum;
}
