import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilterCriteria } from "./inventoryfiltercriteria";
import { UploadSummary } from "./uploadsummary";



export class InventoryTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionDate" })
  completionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=detailHref" })
  detailHref?: string;

  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: InventoryFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=inventoryFileTemplate" })
  inventoryFileTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadSummary" })
  uploadSummary?: UploadSummary;
}
