import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Attachment
/** 
 * An attachment to a case communication. The attachment consists of the file name and the content of the file.
**/
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;
}
