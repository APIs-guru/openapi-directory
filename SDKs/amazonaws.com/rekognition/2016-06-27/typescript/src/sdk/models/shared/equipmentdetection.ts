import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";
import { CoversBodyPart } from "./coversbodypart";
import { ProtectiveEquipmentTypeEnum } from "./protectiveequipmenttypeenum";


// EquipmentDetection
/** 
 * Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.
**/
export class EquipmentDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=CoversBodyPart" })
  coversBodyPart?: CoversBodyPart;

  @Metadata({ data: "json, name=Type" })
  type?: ProtectiveEquipmentTypeEnum;
}
