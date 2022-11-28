import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdHistoryPathParams extends SpeakeasyBase {
    committeeId: string;
}
export declare enum GetCommitteeCommitteeIdHistoryDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare class GetCommitteeCommitteeIdHistoryQueryParams extends SpeakeasyBase {
    apiKey: string;
    designation?: GetCommitteeCommitteeIdHistoryDesignationEnum[];
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCommitteeCommitteeIdHistoryRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdHistoryPathParams;
    queryParams: GetCommitteeCommitteeIdHistoryQueryParams;
}
export declare class GetCommitteeCommitteeIdHistoryResponse extends SpeakeasyBase {
    committeeHistoryPage?: shared.CommitteeHistoryPage;
    contentType: string;
    statusCode: number;
}
