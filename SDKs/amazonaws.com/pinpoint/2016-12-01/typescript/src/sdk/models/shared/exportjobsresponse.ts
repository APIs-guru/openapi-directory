import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportJobResponse } from "./exportjobresponse";



// ExportJobsResponse
/** 
 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
**/
export class ExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: ExportJobResponse })
  item: ExportJobResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
