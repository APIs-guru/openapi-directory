import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadSummary } from "./uploadsummary";


// Task
/** 
 * The type that defines the fields for the task details.
**/
export class Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionDate" })
  completionDate?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=detailHref" })
  detailHref?: string;

  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=uploadSummary" })
  uploadSummary?: UploadSummary;
}
