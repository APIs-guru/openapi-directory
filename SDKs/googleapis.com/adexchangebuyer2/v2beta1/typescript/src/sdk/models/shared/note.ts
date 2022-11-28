import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NoteCreatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}


// Note
/** 
 * A proposal may be associated to several notes.
**/
export class Note extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorRole" })
  creatorRole?: NoteCreatorRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=noteId" })
  noteId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;
}


// NoteInput
/** 
 * A proposal may be associated to several notes.
**/
export class NoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}
