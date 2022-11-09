import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MouthOpen
/** 
 * Indicates whether or not the mouth on the face is open, and the confidence level in the determination.
**/
export class MouthOpen extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Value" })
  value?: boolean;
}
