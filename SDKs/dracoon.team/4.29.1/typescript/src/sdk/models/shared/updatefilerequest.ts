import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectExpiration } from "./objectexpiration";


// UpdateFileRequest
/** 
 * Request model for updating file's metadata
**/
export class UpdateFileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification?: number;

  @Metadata({ data: "json, name=expiration" })
  expiration?: ObjectExpiration;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
