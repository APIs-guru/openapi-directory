import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NoteCreatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * A text note attached to the proposal to facilitate the communication between buyers and sellers.
**/
export declare class Note extends SpeakeasyBase {
    createTime?: string;
    creatorRole?: NoteCreatorRoleEnum;
    note?: string;
}
/**
 * A text note attached to the proposal to facilitate the communication between buyers and sellers.
**/
export declare class NoteInput extends SpeakeasyBase {
    note?: string;
}
