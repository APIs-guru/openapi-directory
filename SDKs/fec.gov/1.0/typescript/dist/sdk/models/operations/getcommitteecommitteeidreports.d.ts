import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdReportsPathParams extends SpeakeasyBase {
    committeeId: string;
}
export declare class GetCommitteeCommitteeIdReportsQueryParams extends SpeakeasyBase {
    apiKey: string;
    beginningImageNumber?: string[];
    candidateId?: string;
    cycle?: number[];
    isAmended?: boolean;
    maxCashOnHandEndPeriodAmount?: string;
    maxDebtsOwedExpenditures?: string;
    maxDisbursementsAmount?: string;
    maxIndependentExpenditures?: string;
    maxPartyCoordinatedExpenditures?: string;
    maxReceiptsAmount?: string;
    maxTotalContributions?: string;
    minCashOnHandEndPeriodAmount?: string;
    minDebtsOwedAmount?: string;
    minDisbursementsAmount?: string;
    minIndependentExpenditures?: string;
    minPartyCoordinatedExpenditures?: string;
    minReceiptsAmount?: string;
    minTotalContributions?: string;
    page?: number;
    perPage?: number;
    reportType?: string[];
    sort?: string[];
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    type?: string[];
    year?: number[];
}
export declare class GetCommitteeCommitteeIdReportsRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdReportsPathParams;
    queryParams: GetCommitteeCommitteeIdReportsQueryParams;
}
export declare class GetCommitteeCommitteeIdReportsResponse extends SpeakeasyBase {
    committeeReportsPage?: shared.CommitteeReportsPage;
    contentType: string;
    statusCode: number;
}
