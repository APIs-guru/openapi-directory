import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Smile
/** 
 * Indicates whether or not the face is smiling, and the confidence level in the determination.
**/
export class Smile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: boolean;
}
