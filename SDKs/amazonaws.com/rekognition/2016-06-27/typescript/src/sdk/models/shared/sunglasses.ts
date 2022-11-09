import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Sunglasses
/** 
 * Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
**/
export class Sunglasses extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Value" })
  value?: boolean;
}
