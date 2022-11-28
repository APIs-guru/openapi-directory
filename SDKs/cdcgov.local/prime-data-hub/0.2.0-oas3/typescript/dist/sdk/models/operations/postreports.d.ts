import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostReportsOptionEnum {
    ValidatePayload = "ValidatePayload",
    CheckConnections = "CheckConnections",
    SendImmediately = "SendImmediately",
    SkipSend = "SkipSend",
    SkipInvalidItems = "SkipInvalidItems"
}
export declare class PostReportsQueryParams extends SpeakeasyBase {
    client: string;
    default?: string[];
    option?: PostReportsOptionEnum;
    routeTo?: string[];
}
export declare class PostReportsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostReportsRequest extends SpeakeasyBase {
    queryParams: PostReportsQueryParams;
    request: string;
    security: PostReportsSecurity;
}
export declare class PostReportsResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
