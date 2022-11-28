import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Sunglasses
/** 
 * Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
**/
export class Sunglasses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: boolean;
}
