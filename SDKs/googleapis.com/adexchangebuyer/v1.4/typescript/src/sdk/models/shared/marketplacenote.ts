import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MarketplaceNote
/** 
 * A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
**/
export class MarketplaceNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatorRole" })
  creatorRole?: string;

  @Metadata({ data: "json, name=dealId" })
  dealId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=noteId" })
  noteId?: string;

  @Metadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @Metadata({ data: "json, name=proposalRevisionNumber" })
  proposalRevisionNumber?: string;

  @Metadata({ data: "json, name=timestampMs" })
  timestampMs?: string;
}
