import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportJobSummary } from "./importjobsummary";


// ListImportJobsResponse
/** 
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
export class ListImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportJobs", elemType: shared.ImportJobSummary })
  importJobs?: ImportJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
