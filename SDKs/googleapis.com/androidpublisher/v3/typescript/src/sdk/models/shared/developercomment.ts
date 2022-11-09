import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Timestamp } from "./timestamp";


// DeveloperComment
/** 
 * Developer entry from conversation between user and developer.
**/
export class DeveloperComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Timestamp;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
