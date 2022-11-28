import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAdConfigsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestAdConfigsRequest extends SpeakeasyBase {
    headers: RequestAdConfigsHeaders;
}
export declare class RequestAdConfigsResponse extends SpeakeasyBase {
    activeDirectoryConfigList?: shared.ActiveDirectoryConfigList;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
