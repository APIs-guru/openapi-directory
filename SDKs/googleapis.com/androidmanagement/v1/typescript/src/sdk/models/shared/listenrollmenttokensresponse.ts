import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnrollmentToken } from "./enrollmenttoken";


// ListEnrollmentTokensResponse
/** 
 * Response to a request to list enrollment tokens for a given enterprise.
**/
export class ListEnrollmentTokensResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=enrollmentTokens", elemType: shared.EnrollmentToken })
  enrollmentTokens?: EnrollmentToken[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
