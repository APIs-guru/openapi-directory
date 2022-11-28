import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectiveEquipmentBodyPart } from "./protectiveequipmentbodypart";
import { BoundingBox } from "./boundingbox";



// ProtectiveEquipmentPerson
/** 
 * A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.
**/
export class ProtectiveEquipmentPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BodyParts", elemType: ProtectiveEquipmentBodyPart })
  bodyParts?: ProtectiveEquipmentBodyPart[];

  @SpeakeasyMetadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;
}
