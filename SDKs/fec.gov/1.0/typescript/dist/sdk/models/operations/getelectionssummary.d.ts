import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetElectionsSummaryOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
export declare class GetElectionsSummaryQueryParams extends SpeakeasyBase {
    apiKey: string;
    cycle: number;
    district?: string;
    electionFull?: boolean;
    office: GetElectionsSummaryOfficeEnum;
    state?: string;
}
export declare class GetElectionsSummaryRequest extends SpeakeasyBase {
    queryParams: GetElectionsSummaryQueryParams;
}
export declare class GetElectionsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    electionSummary?: shared.ElectionSummary;
    statusCode: number;
}
