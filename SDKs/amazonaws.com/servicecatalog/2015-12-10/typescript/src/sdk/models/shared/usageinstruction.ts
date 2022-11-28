import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsageInstruction
/** 
 * Additional information provided by the administrator.
**/
export class UsageInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
