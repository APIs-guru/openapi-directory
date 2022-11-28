import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresidentialContributionsByCandidateQueryParams extends SpeakeasyBase {
    apiKey: string;
    contributorState?: string[];
    electionYear?: number[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetPresidentialContributionsByCandidateRequest extends SpeakeasyBase {
    queryParams: GetPresidentialContributionsByCandidateQueryParams;
}
export declare class GetPresidentialContributionsByCandidateResponse extends SpeakeasyBase {
    contentType: string;
    presidentialByCandidatePage?: shared.PresidentialByCandidatePage;
    statusCode: number;
}
