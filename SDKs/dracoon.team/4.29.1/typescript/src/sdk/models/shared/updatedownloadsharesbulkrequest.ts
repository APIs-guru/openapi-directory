import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// UpdateDownloadSharesBulkRequest
/** 
 * Request model for updating a list of Download Shares
**/
export class UpdateDownloadSharesBulkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @Metadata({ data: "json, name=objectIds" })
  objectIds: number[];

  @Metadata({ data: "json, name=resetMaxDownloads" })
  resetMaxDownloads?: boolean;

  @Metadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @Metadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;
}
