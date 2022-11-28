import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresidentialContributionsByStateQueryParams extends SpeakeasyBase {
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
export declare class GetPresidentialContributionsByStateRequest extends SpeakeasyBase {
    queryParams: GetPresidentialContributionsByStateQueryParams;
}
export declare class GetPresidentialContributionsByStateResponse extends SpeakeasyBase {
    contentType: string;
    presidentialByStatePage?: shared.PresidentialByStatePage;
    statusCode: number;
}
