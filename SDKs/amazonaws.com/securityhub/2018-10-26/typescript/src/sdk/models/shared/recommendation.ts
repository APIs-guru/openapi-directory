import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Recommendation
/** 
 * A recommendation on how to remediate the issue identified in a finding.
**/
export class Recommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
