import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilterCriteria } from "./inventoryfiltercriteria";



export class CreateInventoryTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: InventoryFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=inventoryFileTemplate" })
  inventoryFileTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
