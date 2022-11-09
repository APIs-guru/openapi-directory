import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscribedUploadShare
/** 
 * Subscribed upload share information
**/
export class SubscribedUploadShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=targetNodeId" })
  targetNodeId?: number;
}
