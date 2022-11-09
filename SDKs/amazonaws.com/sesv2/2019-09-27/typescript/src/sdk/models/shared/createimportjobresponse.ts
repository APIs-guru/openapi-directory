import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateImportJobResponse
/** 
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
export class CreateImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;
}
