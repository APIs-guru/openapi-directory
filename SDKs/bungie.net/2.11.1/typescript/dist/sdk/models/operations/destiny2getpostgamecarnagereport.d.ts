import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class Destiny2GetPostGameCarnageReportPathParams extends SpeakeasyBase {
    activityId: number;
}
export declare class Destiny2GetPostGameCarnageReportRequest extends SpeakeasyBase {
    pathParams: Destiny2GetPostGameCarnageReportPathParams;
}
export declare class Destiny2GetPostGameCarnageReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
