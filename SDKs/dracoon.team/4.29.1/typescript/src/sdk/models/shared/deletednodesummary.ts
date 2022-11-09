import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeletedNodeSummaryTypeEnum {
    Folder = "folder"
,    File = "file"
}


// DeletedNodeSummary
/** 
 * Deleted node information (Deleted node can be a folder or file)
**/
export class DeletedNodeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=cntVersions" })
  cntVersions: number;

  @Metadata({ data: "json, name=firstDeletedAt" })
  firstDeletedAt: Date;

  @Metadata({ data: "json, name=lastDeletedAt" })
  lastDeletedAt: Date;

  @Metadata({ data: "json, name=lastDeletedNodeId" })
  lastDeletedNodeId: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parentId" })
  parentId: number;

  @Metadata({ data: "json, name=parentPath" })
  parentPath: string;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;

  @Metadata({ data: "json, name=type" })
  type: DeletedNodeSummaryTypeEnum;
}
