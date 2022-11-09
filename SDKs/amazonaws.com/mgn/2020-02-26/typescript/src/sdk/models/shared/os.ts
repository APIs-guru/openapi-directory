import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Os
/** 
 * Operating System.
**/
export class Os extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullString" })
  fullString?: string;
}
