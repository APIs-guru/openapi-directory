import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UsageInstruction
/** 
 * Additional information provided by the administrator.
**/
export class UsageInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
