import { SpeakeasyBase } from "../../../internal/utils";
import { EnrollmentToken } from "./enrollmenttoken";
/**
 * Response to a request to list enrollment tokens for a given enterprise.
**/
export declare class ListEnrollmentTokensResponse extends SpeakeasyBase {
    enrollmentTokens?: EnrollmentToken[];
    nextPageToken?: string;
}
