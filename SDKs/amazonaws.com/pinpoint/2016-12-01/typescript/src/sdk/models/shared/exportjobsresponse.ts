import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportJobResponse } from "./exportjobresponse";


// ExportJobsResponse
/** 
 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
**/
export class ExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.ExportJobResponse })
  item: ExportJobResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
