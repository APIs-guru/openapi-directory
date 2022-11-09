import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NoteCreatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED"
,    Buyer = "BUYER"
,    Seller = "SELLER"
}


// Note
/** 
 * A proposal may be associated to several notes.
**/
export class Note extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creatorRole" })
  creatorRole?: NoteCreatorRoleEnum;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=noteId" })
  noteId?: string;

  @Metadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;
}
