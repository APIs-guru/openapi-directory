import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateFolderRequest
/** 
 * Request model for creating a folder
**/
export class CreateFolderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId: number;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
