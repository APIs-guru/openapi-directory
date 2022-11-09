import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSearchV1ScrapeQueryParams extends SpeakeasyBase {
    callback?: string;
    cursor?: string;
    field?: string;
    q?: string;
    size?: number;
    sort?: string;
    totalOnly?: boolean;
}
export declare class GetSearchV1ScrapeRequest extends SpeakeasyBase {
    queryParams: GetSearchV1ScrapeQueryParams;
}
export declare class GetSearchV1ScrapeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    scrapeResult?: shared.ScrapeResult;
    statusCode: number;
}
