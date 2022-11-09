import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsSource } from "./gcssource";


// DocumentInputConfig
/** 
 * Input configuration of a Document.
**/
export class DocumentInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;
}
