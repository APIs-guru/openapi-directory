import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightRule
/** 
 * This structure contains the definition for a Contributor Insights rule.
**/
export class InsightRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  definition: string;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  schema: string;

  @SpeakeasyMetadata()
  state: string;
}
