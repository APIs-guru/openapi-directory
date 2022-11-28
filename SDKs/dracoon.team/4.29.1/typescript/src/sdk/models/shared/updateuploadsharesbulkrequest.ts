import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";



// UpdateUploadSharesBulkRequest
/** 
 * Request model for updating a list of Download Shares
**/
export class UpdateUploadSharesBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=filesExpiryPeriod" })
  filesExpiryPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSlots" })
  maxSlots?: number;

  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds: number[];

  @SpeakeasyMetadata({ data: "json, name=resetFilesExpiryPeriod" })
  resetFilesExpiryPeriod?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resetMaxSize" })
  resetMaxSize?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resetMaxSlots" })
  resetMaxSlots?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorName" })
  showCreatorName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showCreatorUsername" })
  showCreatorUsername?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showUploadedFiles" })
  showUploadedFiles?: boolean;
}
