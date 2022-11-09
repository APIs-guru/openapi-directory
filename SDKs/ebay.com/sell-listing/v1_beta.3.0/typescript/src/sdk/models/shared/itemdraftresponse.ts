import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemDraftResponse
/** 
 * The type that defines the field for the createItemDraft response.
**/
export class ItemDraftResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemDraftId" })
  itemDraftId?: string;

  @Metadata({ data: "json, name=sellFlowNativeUri" })
  sellFlowNativeUri?: string;

  @Metadata({ data: "json, name=sellFlowUrl" })
  sellFlowUrl?: string;
}
