import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Beard
/** 
 * Indicates whether or not the face has a beard, and the confidence level in the determination.
**/
export class Beard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: boolean;
}
