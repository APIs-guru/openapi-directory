import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateImportJobResponse
/** 
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
export class CreateImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
