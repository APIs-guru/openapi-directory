import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectiveEquipmentBodyPart } from "./protectiveequipmentbodypart";
import { BoundingBox } from "./boundingbox";
/**
 * A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.
**/
export declare class ProtectiveEquipmentPerson extends SpeakeasyBase {
    bodyParts?: ProtectiveEquipmentBodyPart[];
    boundingBox?: BoundingBox;
    confidence?: number;
    id?: number;
}
