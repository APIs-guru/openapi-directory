import { SpeakeasyBase } from "../../../internal/utils";
import { EquipmentDetection } from "./equipmentdetection";
import { BodyPartEnum } from "./bodypartenum";
/**
 * Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>.
**/
export declare class ProtectiveEquipmentBodyPart extends SpeakeasyBase {
    confidence?: number;
    equipmentDetections?: EquipmentDetection[];
    name?: BodyPartEnum;
}
