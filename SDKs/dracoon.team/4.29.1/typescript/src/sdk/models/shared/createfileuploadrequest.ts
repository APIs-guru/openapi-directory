import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// CreateFileUploadRequest
/** 
 * Request model for creating an upload channel
**/
export class CreateFileUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification?: number;

  @Metadata({ data: "json, name=directS3Upload" })
  directS3Upload?: boolean;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
