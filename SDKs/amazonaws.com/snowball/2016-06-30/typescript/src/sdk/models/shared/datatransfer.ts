import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataTransfer
/** 
 * Defines the real-time status of a Snow device's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.
**/
export class DataTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BytesTransferred" })
  bytesTransferred?: number;

  @SpeakeasyMetadata({ data: "json, name=ObjectsTransferred" })
  objectsTransferred?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalBytes" })
  totalBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalObjects" })
  totalObjects?: number;
}
