import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";



// UpdateDownloadSharesBulkRequest
/** 
 * Request model for updating a list of Download Shares
**/
export class UpdateDownloadSharesBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds: number[];

  @SpeakeasyMetadata({ data: "json, name=resetMaxDownloads" })
  resetMaxDownloads?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;
}
