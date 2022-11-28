import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { CoversBodyPart } from "./coversbodypart";
import { ProtectiveEquipmentTypeEnum } from "./protectiveequipmenttypeenum";
/**
 * Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.
**/
export declare class EquipmentDetection extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    confidence?: number;
    coversBodyPart?: CoversBodyPart;
    type?: ProtectiveEquipmentTypeEnum;
}
