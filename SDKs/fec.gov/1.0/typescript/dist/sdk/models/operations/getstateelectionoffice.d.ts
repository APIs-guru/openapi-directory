import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStateElectionOfficeQueryParams extends SpeakeasyBase {
    apiKey: string;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state: string;
}
export declare class GetStateElectionOfficeRequest extends SpeakeasyBase {
    queryParams: GetStateElectionOfficeQueryParams;
}
export declare class GetStateElectionOfficeResponse extends SpeakeasyBase {
    contentType: string;
    stateElectionOfficeInfoPage?: shared.StateElectionOfficeInfoPage;
    statusCode: number;
}
