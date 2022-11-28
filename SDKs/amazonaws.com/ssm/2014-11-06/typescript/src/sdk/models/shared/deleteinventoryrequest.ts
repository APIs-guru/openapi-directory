import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventorySchemaDeleteOptionEnum } from "./inventoryschemadeleteoptionenum";



export class DeleteInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SchemaDeleteOption" })
  schemaDeleteOption?: InventorySchemaDeleteOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName: string;
}
