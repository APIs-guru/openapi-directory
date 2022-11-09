import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductData } from "./productdata";
import { TransactionData } from "./transactiondata";

export enum EcommerceDataActionTypeEnum {
    Unknown = "UNKNOWN"
,    Click = "CLICK"
,    DetailsView = "DETAILS_VIEW"
,    AddToCart = "ADD_TO_CART"
,    RemoveFromCart = "REMOVE_FROM_CART"
,    Checkout = "CHECKOUT"
,    Payment = "PAYMENT"
,    Refund = "REFUND"
,    CheckoutOption = "CHECKOUT_OPTION"
}

export enum EcommerceDataEcommerceTypeEnum {
    EcommerceTypeUnspecified = "ECOMMERCE_TYPE_UNSPECIFIED"
,    Classic = "CLASSIC"
,    Enhanced = "ENHANCED"
}


// EcommerceData
/** 
 * E-commerce details associated with the user activity.
**/
export class EcommerceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionType" })
  actionType?: EcommerceDataActionTypeEnum;

  @Metadata({ data: "json, name=ecommerceType" })
  ecommerceType?: EcommerceDataEcommerceTypeEnum;

  @Metadata({ data: "json, name=products", elemType: shared.ProductData })
  products?: ProductData[];

  @Metadata({ data: "json, name=transaction" })
  transaction?: TransactionData;
}
