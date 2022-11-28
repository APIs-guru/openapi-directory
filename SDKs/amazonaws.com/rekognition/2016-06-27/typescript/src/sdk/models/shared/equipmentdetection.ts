import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { CoversBodyPart } from "./coversbodypart";
import { ProtectiveEquipmentTypeEnum } from "./protectiveequipmenttypeenum";



// EquipmentDetection
/** 
 * Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.
**/
export class EquipmentDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=CoversBodyPart" })
  coversBodyPart?: CoversBodyPart;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ProtectiveEquipmentTypeEnum;
}
