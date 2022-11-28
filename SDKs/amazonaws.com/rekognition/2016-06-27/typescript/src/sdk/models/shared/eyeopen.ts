import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EyeOpen
/** 
 * Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
**/
export class EyeOpen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: boolean;
}
