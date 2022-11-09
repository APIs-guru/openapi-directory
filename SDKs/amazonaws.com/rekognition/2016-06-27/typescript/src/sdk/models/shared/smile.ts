import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Smile
/** 
 * Indicates whether or not the face is smiling, and the confidence level in the determination.
**/
export class Smile extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Value" })
  value?: boolean;
}
