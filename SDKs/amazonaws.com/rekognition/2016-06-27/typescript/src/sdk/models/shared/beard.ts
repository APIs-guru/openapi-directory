import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Beard
/** 
 * Indicates whether or not the face has a beard, and the confidence level in the determination.
**/
export class Beard extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Value" })
  value?: boolean;
}
