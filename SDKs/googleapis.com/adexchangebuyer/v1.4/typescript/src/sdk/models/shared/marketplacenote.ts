import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MarketplaceNote
/** 
 * A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
**/
export class MarketplaceNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorRole" })
  creatorRole?: string;

  @SpeakeasyMetadata({ data: "json, name=dealId" })
  dealId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=noteId" })
  noteId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposalRevisionNumber" })
  proposalRevisionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampMs" })
  timestampMs?: string;
}
