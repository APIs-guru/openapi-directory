import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentsSourceKeyEnum } from "./attachmentssourcekeyenum";



// AttachmentsSource
/** 
 * Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
**/
export class AttachmentsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: AttachmentsSourceKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
