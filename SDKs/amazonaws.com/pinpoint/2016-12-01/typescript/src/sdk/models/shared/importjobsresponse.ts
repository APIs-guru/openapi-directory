import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJobResponse } from "./importjobresponse";



// ImportJobsResponse
/** 
 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
**/
export class ImportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: ImportJobResponse })
  item: ImportJobResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
