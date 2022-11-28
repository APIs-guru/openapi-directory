import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";



// DeveloperComment
/** 
 * Developer entry from conversation between user and developer.
**/
export class DeveloperComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
