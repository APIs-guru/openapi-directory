import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUploadSharesQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestUploadSharesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUploadSharesRequest extends SpeakeasyBase {
    queryParams: RequestUploadSharesQueryParams;
    headers: RequestUploadSharesHeaders;
}
export declare class RequestUploadSharesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    uploadShareList?: shared.UploadShareList;
}
