import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeletedNodeSummaryTypeEnum {
    Folder = "folder",
    File = "file"
}


// DeletedNodeSummary
/** 
 * Deleted node information (Deleted node can be a folder or file)
**/
export class DeletedNodeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cntVersions" })
  cntVersions: number;

  @SpeakeasyMetadata({ data: "json, name=firstDeletedAt" })
  firstDeletedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=lastDeletedAt" })
  lastDeletedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=lastDeletedNodeId" })
  lastDeletedNodeId: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId: number;

  @SpeakeasyMetadata({ data: "json, name=parentPath" })
  parentPath: string;

  @SpeakeasyMetadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @SpeakeasyMetadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: DeletedNodeSummaryTypeEnum;
}
