import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CoversBodyPart
/** 
 * Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see <a>DetectProtectiveEquipment</a>.
**/
export class CoversBodyPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: boolean;
}
