import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryFilterCriteria } from "./inventoryfiltercriteria";


export class CreateInventoryTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: InventoryFilterCriteria;

  @Metadata({ data: "json, name=inventoryFileTemplate" })
  inventoryFileTemplate?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
