import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Attachment
/** 
 * An attachment to a case communication. The attachment consists of the file name and the content of the file.
**/
export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;
}
