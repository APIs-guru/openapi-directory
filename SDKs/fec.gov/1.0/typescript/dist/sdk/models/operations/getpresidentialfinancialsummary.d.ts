import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresidentialFinancialSummaryQueryParams extends SpeakeasyBase {
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
export declare class GetPresidentialFinancialSummaryRequest extends SpeakeasyBase {
    queryParams: GetPresidentialFinancialSummaryQueryParams;
}
export declare class GetPresidentialFinancialSummaryResponse extends SpeakeasyBase {
    contentType: string;
    presidentialSummaryPage?: shared.PresidentialSummaryPage;
    statusCode: number;
}
