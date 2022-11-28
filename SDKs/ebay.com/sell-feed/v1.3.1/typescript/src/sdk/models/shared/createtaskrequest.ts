import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTaskRequest
/** 
 * The type that defines the fields for the createTask method.
**/
export class CreateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
