import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams extends SpeakeasyBase {
    activityId: number;
}
export declare class Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class Destiny2ReportOffensivePostGameCarnageReportPlayerRequest extends SpeakeasyBase {
    pathParams: Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams;
    security: Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity;
}
export declare class Destiny2ReportOffensivePostGameCarnageReportPlayerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
