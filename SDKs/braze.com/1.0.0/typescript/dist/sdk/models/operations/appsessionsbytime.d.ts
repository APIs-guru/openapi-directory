import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppSessionsByTimeQueryParams extends SpeakeasyBase {
    appId?: string;
    endingAt?: string;
    length?: string;
    segmentId?: string;
    unit?: string;
}
export declare class AppSessionsByTimeRequest extends SpeakeasyBase {
    queryParams: AppSessionsByTimeQueryParams;
}
export declare class AppSessionsByTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
