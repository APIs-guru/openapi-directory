import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Template
/** 
 * Specifies the name and version of the message template to use for the message.
**/
export class Template extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
