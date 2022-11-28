import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Os
/** 
 * Operating System.
**/
export class Os extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullString" })
  fullString?: string;
}
