import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWaybackV1AvailableQueryParams extends SpeakeasyBase {
    callback?: string;
    closest?: shared.ClosestEnum;
    statusCode?: number;
    tag?: string;
    timeout?: number;
    timestamp?: string;
    url: string;
}
export declare class GetWaybackV1AvailableRequest extends SpeakeasyBase {
    queryParams: GetWaybackV1AvailableQueryParams;
}
export declare class GetWaybackV1AvailableResponse extends SpeakeasyBase {
    availabilityResults?: shared.AvailabilityResults;
    body?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
