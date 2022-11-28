import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Eyeglasses
/** 
 * Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
**/
export class Eyeglasses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: boolean;
}
