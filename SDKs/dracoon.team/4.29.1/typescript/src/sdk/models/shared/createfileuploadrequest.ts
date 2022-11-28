import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";



// CreateFileUploadRequest
/** 
 * Request model for creating an upload channel
**/
export class CreateFileUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: number;

  @SpeakeasyMetadata({ data: "json, name=directS3Upload" })
  directS3Upload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @SpeakeasyMetadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
