import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DotGetGlobalAlertsQueryParams extends SpeakeasyBase {
    includestreaming?: boolean;
}
export declare class DotGetGlobalAlertsRequest extends SpeakeasyBase {
    queryParams: DotGetGlobalAlertsQueryParams;
}
export declare class DotGetGlobalAlertsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
