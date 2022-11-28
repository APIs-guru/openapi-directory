import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductData } from "./productdata";
import { TransactionData } from "./transactiondata";


export enum EcommerceDataActionTypeEnum {
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

export enum EcommerceDataEcommerceTypeEnum {
    EcommerceTypeUnspecified = "ECOMMERCE_TYPE_UNSPECIFIED",
    Classic = "CLASSIC",
    Enhanced = "ENHANCED"
}


// EcommerceData
/** 
 * E-commerce details associated with the user activity.
**/
export class EcommerceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: EcommerceDataActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ecommerceType" })
  ecommerceType?: EcommerceDataEcommerceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: ProductData })
  products?: ProductData[];

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: TransactionData;
}
