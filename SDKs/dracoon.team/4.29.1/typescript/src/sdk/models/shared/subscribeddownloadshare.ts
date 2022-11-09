import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscribedDownloadShare
/** 
 * Subscribed download share information
**/
export class SubscribedDownloadShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=authParentId" })
  authParentId?: number;

  @Metadata({ data: "json, name=id" })
  id: number;
}
