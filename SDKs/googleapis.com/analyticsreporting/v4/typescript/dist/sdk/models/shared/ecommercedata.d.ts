import { SpeakeasyBase } from "../../../internal/utils";
import { ProductData } from "./productdata";
import { TransactionData } from "./transactiondata";
export declare enum EcommerceDataActionTypeEnum {
    Unknown = "UNKNOWN",
    Click = "CLICK",
    DetailsView = "DETAILS_VIEW",
    AddToCart = "ADD_TO_CART",
    RemoveFromCart = "REMOVE_FROM_CART",
    Checkout = "CHECKOUT",
    Payment = "PAYMENT",
    Refund = "REFUND",
    CheckoutOption = "CHECKOUT_OPTION"
}
export declare enum EcommerceDataEcommerceTypeEnum {
    EcommerceTypeUnspecified = "ECOMMERCE_TYPE_UNSPECIFIED",
    Classic = "CLASSIC",
    Enhanced = "ENHANCED"
}
/**
 * E-commerce details associated with the user activity.
**/
export declare class EcommerceData extends SpeakeasyBase {
    actionType?: EcommerceDataActionTypeEnum;
    ecommerceType?: EcommerceDataEcommerceTypeEnum;
    products?: ProductData[];
    transaction?: TransactionData;
}
