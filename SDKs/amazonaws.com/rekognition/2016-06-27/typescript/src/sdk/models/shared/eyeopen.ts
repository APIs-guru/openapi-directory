import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EyeOpen
/** 
 * Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
**/
export class EyeOpen extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Value" })
  value?: boolean;
}
