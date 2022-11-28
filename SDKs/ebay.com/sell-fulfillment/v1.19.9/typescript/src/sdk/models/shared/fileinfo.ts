import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileInfo
/** 
 * This type is used by the files array, which shows the name, ID, file type, and upload date for each provided evidential file.
**/
export class FileInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadedDate" })
  uploadedDate?: string;
}
