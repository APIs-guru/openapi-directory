import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHistory2VehicleHistoryGetQueryParams extends SpeakeasyBase {
    jwt: string;
    vin: string;
}
export declare class GetHistory2VehicleHistoryGetRequest extends SpeakeasyBase {
    queryParams: GetHistory2VehicleHistoryGetQueryParams;
}
export declare class GetHistory2VehicleHistoryGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    historyResp?: shared.HistoryResp;
    statusCode: number;
}
