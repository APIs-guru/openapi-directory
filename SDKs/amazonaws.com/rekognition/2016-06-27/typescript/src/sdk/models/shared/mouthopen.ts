import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MouthOpen
/** 
 * Indicates whether or not the mouth on the face is open, and the confidence level in the determination.
**/
export class MouthOpen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: boolean;
}
