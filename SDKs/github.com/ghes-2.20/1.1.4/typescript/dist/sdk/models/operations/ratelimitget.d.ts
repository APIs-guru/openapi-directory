import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RateLimitGetResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    rateLimitOverview?: shared.RateLimitOverview;
}
