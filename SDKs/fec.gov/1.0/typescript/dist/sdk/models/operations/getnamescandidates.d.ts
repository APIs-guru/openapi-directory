import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNamesCandidatesQueryParams extends SpeakeasyBase {
    apiKey: string;
    q: string[];
}
export declare class GetNamesCandidatesRequest extends SpeakeasyBase {
    queryParams: GetNamesCandidatesQueryParams;
}
export declare class GetNamesCandidatesResponse extends SpeakeasyBase {
    candidateSearchList?: shared.CandidateSearchList;
    contentType: string;
    statusCode: number;
}
