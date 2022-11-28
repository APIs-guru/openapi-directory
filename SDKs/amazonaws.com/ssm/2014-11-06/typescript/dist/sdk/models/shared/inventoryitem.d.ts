import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information collected from managed instances based on your inventory policy document
**/
export declare class InventoryItem extends SpeakeasyBase {
    captureTime: string;
    content?: Map<string, string>[];
    contentHash?: string;
    context?: Map<string, string>;
    schemaVersion: string;
    typeName: string;
}
