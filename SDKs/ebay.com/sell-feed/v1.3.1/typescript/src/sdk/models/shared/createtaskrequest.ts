import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateTaskRequest
/** 
 * The type that defines the fields for the createTask method.
**/
export class CreateTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
