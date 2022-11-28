import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestDownloadSharesQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestDownloadSharesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestDownloadSharesRequest extends SpeakeasyBase {
    queryParams: RequestDownloadSharesQueryParams;
    headers: RequestDownloadSharesHeaders;
}
export declare class RequestDownloadSharesResponse extends SpeakeasyBase {
    contentType: string;
    downloadShareList?: shared.DownloadShareList;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
