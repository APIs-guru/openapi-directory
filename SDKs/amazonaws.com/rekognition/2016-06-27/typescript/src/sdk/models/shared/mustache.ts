import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Mustache
/** 
 * Indicates whether or not the face has a mustache, and the confidence level in the determination.
**/
export class Mustache extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Value" })
  value?: boolean;
}
