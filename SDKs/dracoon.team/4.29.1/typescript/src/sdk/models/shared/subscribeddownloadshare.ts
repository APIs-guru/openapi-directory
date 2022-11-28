import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscribedDownloadShare
/** 
 * Subscribed download share information
**/
export class SubscribedDownloadShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authParentId" })
  authParentId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}
