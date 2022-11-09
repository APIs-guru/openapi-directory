import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryFilterCriteria } from "./inventoryfiltercriteria";
import { UploadSummary } from "./uploadsummary";


export class InventoryTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionDate" })
  completionDate?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=detailHref" })
  detailHref?: string;

  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: InventoryFilterCriteria;

  @Metadata({ data: "json, name=inventoryFileTemplate" })
  inventoryFileTemplate?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=uploadSummary" })
  uploadSummary?: UploadSummary;
}
