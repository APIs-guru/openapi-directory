import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Template
/** 
 * Specifies the name and version of the message template to use for the message.
**/
export class Template extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
