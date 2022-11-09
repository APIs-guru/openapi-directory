import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EquipmentDetection } from "./equipmentdetection";
import { BodyPartEnum } from "./bodypartenum";


// ProtectiveEquipmentBodyPart
/** 
 * Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>. 
**/
export class ProtectiveEquipmentBodyPart extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=EquipmentDetections", elemType: shared.EquipmentDetection })
  equipmentDetections?: EquipmentDetection[];

  @Metadata({ data: "json, name=Name" })
  name?: BodyPartEnum;
}
