import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NoteCreatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}


// Note
/** 
 * A text note attached to the proposal to facilitate the communication between buyers and sellers.
**/
export class Note extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorRole" })
  creatorRole?: NoteCreatorRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}


// NoteInput
/** 
 * A text note attached to the proposal to facilitate the communication between buyers and sellers.
**/
export class NoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}
