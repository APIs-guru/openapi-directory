import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ItvVoucherOfferTypeEnum {
    Stripe = "stripe",
    TalonOne = "talon one"
}
export declare class ItvVoucher extends SpeakeasyBase {
    display: Map<string, any>;
    id: string;
    links: Map<string, any>;
    offerType: ItvVoucherOfferTypeEnum;
}
