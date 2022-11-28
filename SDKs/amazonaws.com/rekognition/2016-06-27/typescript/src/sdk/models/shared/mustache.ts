import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Mustache
/** 
 * Indicates whether or not the face has a mustache, and the confidence level in the determination.
**/
export class Mustache extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: boolean;
}
