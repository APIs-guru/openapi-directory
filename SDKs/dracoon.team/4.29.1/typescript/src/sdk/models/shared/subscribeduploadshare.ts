import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscribedUploadShare
/** 
 * Subscribed upload share information
**/
export class SubscribedUploadShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=targetNodeId" })
  targetNodeId?: number;
}
