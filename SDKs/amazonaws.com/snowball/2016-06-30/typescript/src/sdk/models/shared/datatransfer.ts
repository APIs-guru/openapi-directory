import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataTransfer
/** 
 * Defines the real-time status of a Snow device's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.
**/
export class DataTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=BytesTransferred" })
  bytesTransferred?: number;

  @Metadata({ data: "json, name=ObjectsTransferred" })
  objectsTransferred?: number;

  @Metadata({ data: "json, name=TotalBytes" })
  totalBytes?: number;

  @Metadata({ data: "json, name=TotalObjects" })
  totalObjects?: number;
}
