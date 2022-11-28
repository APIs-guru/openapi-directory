import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EquipmentDetection } from "./equipmentdetection";
import { BodyPartEnum } from "./bodypartenum";



// ProtectiveEquipmentBodyPart
/** 
 * Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>. 
**/
export class ProtectiveEquipmentBodyPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=EquipmentDetections", elemType: EquipmentDetection })
  equipmentDetections?: EquipmentDetection[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: BodyPartEnum;
}
