import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdHistoryCyclePathParams extends SpeakeasyBase {
    committeeId: string;
    cycle: number;
}
export declare enum GetCommitteeCommitteeIdHistoryCycleDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare class GetCommitteeCommitteeIdHistoryCycleQueryParams extends SpeakeasyBase {
    apiKey: string;
    designation?: GetCommitteeCommitteeIdHistoryCycleDesignationEnum[];
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCommitteeCommitteeIdHistoryCycleRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdHistoryCyclePathParams;
    queryParams: GetCommitteeCommitteeIdHistoryCycleQueryParams;
}
export declare class GetCommitteeCommitteeIdHistoryCycleResponse extends SpeakeasyBase {
    committeeHistoryPage?: shared.CommitteeHistoryPage;
    contentType: string;
    statusCode: number;
}
