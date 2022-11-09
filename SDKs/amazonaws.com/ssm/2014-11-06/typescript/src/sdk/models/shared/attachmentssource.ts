import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttachmentsSourceKeyEnum } from "./attachmentssourcekeyenum";


// AttachmentsSource
/** 
 * Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
**/
export class AttachmentsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: AttachmentsSourceKeyEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
