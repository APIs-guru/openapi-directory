import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateFolderRequest
/** 
 * Request model for creating a folder
**/
export class CreateFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId: number;

  @SpeakeasyMetadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @SpeakeasyMetadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
