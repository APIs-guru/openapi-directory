import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportJobResponse } from "./importjobresponse";


// ImportJobsResponse
/** 
 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
**/
export class ImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.ImportJobResponse })
  item: ImportJobResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
