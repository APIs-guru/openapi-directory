import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProtectiveEquipmentBodyPart } from "./protectiveequipmentbodypart";
import { BoundingBox } from "./boundingbox";


// ProtectiveEquipmentPerson
/** 
 * A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.
**/
export class ProtectiveEquipmentPerson extends SpeakeasyBase {
  @Metadata({ data: "json, name=BodyParts", elemType: shared.ProtectiveEquipmentBodyPart })
  bodyParts?: ProtectiveEquipmentBodyPart[];

  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;
}
