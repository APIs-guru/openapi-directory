import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Recommendation
/** 
 * A recommendation on how to remediate the issue identified in a finding.
**/
export class Recommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
