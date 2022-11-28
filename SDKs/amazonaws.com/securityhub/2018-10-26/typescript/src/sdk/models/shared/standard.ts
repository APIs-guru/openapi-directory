import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Standard
/** 
 * Provides information about a specific standard.
**/
export class Standard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EnabledByDefault" })
  enabledByDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StandardsArn" })
  standardsArn?: string;
}
