import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// UpdateUploadSharesBulkRequest
/** 
 * Request model for updating a list of Download Shares
**/
export class UpdateUploadSharesBulkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=filesExpiryPeriod" })
  filesExpiryPeriod?: number;

  @Metadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=maxSlots" })
  maxSlots?: number;

  @Metadata({ data: "json, name=objectIds" })
  objectIds: number[];

  @Metadata({ data: "json, name=resetFilesExpiryPeriod" })
  resetFilesExpiryPeriod?: boolean;

  @Metadata({ data: "json, name=resetMaxSize" })
  resetMaxSize?: boolean;

  @Metadata({ data: "json, name=resetMaxSlots" })
  resetMaxSlots?: boolean;

  @Metadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @Metadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @Metadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;
}
