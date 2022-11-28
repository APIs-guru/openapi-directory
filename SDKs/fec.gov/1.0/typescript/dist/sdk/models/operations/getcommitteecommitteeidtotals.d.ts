import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdTotalsPathParams extends SpeakeasyBase {
    committeeId: string;
}
export declare class GetCommitteeCommitteeIdTotalsQueryParams extends SpeakeasyBase {
    apiKey: string;
    cycle?: number[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCommitteeCommitteeIdTotalsRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdTotalsPathParams;
    queryParams: GetCommitteeCommitteeIdTotalsQueryParams;
}
export declare class GetCommitteeCommitteeIdTotalsResponse extends SpeakeasyBase {
    committeeTotalsPage?: shared.CommitteeTotalsPage;
    contentType: string;
    statusCode: number;
}
