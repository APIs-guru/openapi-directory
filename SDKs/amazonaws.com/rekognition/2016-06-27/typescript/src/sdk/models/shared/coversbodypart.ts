import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CoversBodyPart
/** 
 * Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see <a>DetectProtectiveEquipment</a>.
**/
export class CoversBodyPart extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Value" })
  value?: boolean;
}
