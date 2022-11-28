import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresidentialContributionsBySizeQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    electionYear?: number[];
    page?: number;
    perPage?: number;
    size?: number[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetPresidentialContributionsBySizeRequest extends SpeakeasyBase {
    queryParams: GetPresidentialContributionsBySizeQueryParams;
}
export declare class GetPresidentialContributionsBySizeResponse extends SpeakeasyBase {
    contentType: string;
    presidentialBySizePage?: shared.PresidentialBySizePage;
    statusCode: number;
}
