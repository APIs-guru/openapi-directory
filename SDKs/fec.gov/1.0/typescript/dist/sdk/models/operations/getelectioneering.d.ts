import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetElectioneeringQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    committeeId?: string[];
    description?: string;
    lastIndex?: number;
    maxAmount?: string;
    maxDate?: Date;
    minAmount?: string;
    minDate?: Date;
    page?: number;
    perPage?: number;
    reportYear?: number[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetElectioneeringRequest extends SpeakeasyBase {
    queryParams: GetElectioneeringQueryParams;
}
export declare class GetElectioneeringResponse extends SpeakeasyBase {
    contentType: string;
    electioneeringPage?: shared.ElectioneeringPage;
    statusCode: number;
}
