import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportDestination } from "./importdestination";
import { JobStatusEnum } from "./jobstatusenum";


// ImportJobSummary
/** 
 * A summary of the import job.
**/
export class ImportJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @Metadata({ data: "json, name=ImportDestination" })
  importDestination?: ImportDestination;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;
}
