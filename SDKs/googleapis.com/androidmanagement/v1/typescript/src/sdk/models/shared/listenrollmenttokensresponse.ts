import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnrollmentToken } from "./enrollmenttoken";



// ListEnrollmentTokensResponse
/** 
 * Response to a request to list enrollment tokens for a given enterprise.
**/
export class ListEnrollmentTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enrollmentTokens", elemType: EnrollmentToken })
  enrollmentTokens?: EnrollmentToken[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
