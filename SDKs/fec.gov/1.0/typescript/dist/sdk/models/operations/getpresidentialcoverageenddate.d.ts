import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresidentialCoverageEndDateQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    electionYear?: number[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetPresidentialCoverageEndDateRequest extends SpeakeasyBase {
    queryParams: GetPresidentialCoverageEndDateQueryParams;
}
export declare class GetPresidentialCoverageEndDateResponse extends SpeakeasyBase {
    contentType: string;
    presidentialCoveragePage?: shared.PresidentialCoveragePage;
    statusCode: number;
}
