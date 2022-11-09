import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Eyeglasses
/** 
 * Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
**/
export class Eyeglasses extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Value" })
  value?: boolean;
}
