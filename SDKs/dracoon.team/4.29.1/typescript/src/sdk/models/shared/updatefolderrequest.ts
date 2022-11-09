import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateFolderRequest
/** 
 * Request model for updating folder's metadata
**/
export class UpdateFolderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
