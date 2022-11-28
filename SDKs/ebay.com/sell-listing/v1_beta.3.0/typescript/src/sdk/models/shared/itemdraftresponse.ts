import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemDraftResponse
/** 
 * The type that defines the field for the createItemDraft response.
**/
export class ItemDraftResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemDraftId" })
  itemDraftId?: string;

  @SpeakeasyMetadata({ data: "json, name=sellFlowNativeUri" })
  sellFlowNativeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=sellFlowUrl" })
  sellFlowUrl?: string;
}
