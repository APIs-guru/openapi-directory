import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NoteCreatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * A proposal may be associated to several notes.
**/
export declare class Note extends SpeakeasyBase {
    createTime?: string;
    creatorRole?: NoteCreatorRoleEnum;
    note?: string;
    noteId?: string;
    proposalRevision?: string;
}
/**
 * A proposal may be associated to several notes.
**/
export declare class NoteInput extends SpeakeasyBase {
    note?: string;
}
