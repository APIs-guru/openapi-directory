import { SpeakeasyBase } from "../../../internal/utils";
import { InventorySchemaDeleteOptionEnum } from "./inventoryschemadeleteoptionenum";
export declare class DeleteInventoryRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    schemaDeleteOption?: InventorySchemaDeleteOptionEnum;
    typeName: string;
}
