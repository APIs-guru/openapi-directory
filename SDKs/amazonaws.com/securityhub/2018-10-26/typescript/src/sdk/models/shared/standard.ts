import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Standard
/** 
 * Provides information about a specific standard.
**/
export class Standard extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EnabledByDefault" })
  enabledByDefault?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StandardsArn" })
  standardsArn?: string;
}
