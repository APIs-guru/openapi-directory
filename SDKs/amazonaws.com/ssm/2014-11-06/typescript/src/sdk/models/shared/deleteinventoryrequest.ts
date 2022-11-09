import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventorySchemaDeleteOptionEnum } from "./inventoryschemadeleteoptionenum";


export class DeleteInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=SchemaDeleteOption" })
  schemaDeleteOption?: InventorySchemaDeleteOptionEnum;

  @Metadata({ data: "json, name=TypeName" })
  typeName: string;
}
