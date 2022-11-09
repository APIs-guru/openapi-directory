import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileInfo
/** 
 * This type is used by the files array, which shows the name, ID, file type, and upload date for each provided evidential file.
**/
export class FileInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileId" })
  fileId?: string;

  @Metadata({ data: "json, name=fileType" })
  fileType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uploadedDate" })
  uploadedDate?: string;
}
