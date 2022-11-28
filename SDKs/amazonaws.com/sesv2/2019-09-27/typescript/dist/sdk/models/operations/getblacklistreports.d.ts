import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBlacklistReportsQueryParams extends SpeakeasyBase {
    blacklistItemNames: string[];
}
export declare class GetBlacklistReportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBlacklistReportsRequest extends SpeakeasyBase {
    queryParams: GetBlacklistReportsQueryParams;
    headers: GetBlacklistReportsHeaders;
}
export declare class GetBlacklistReportsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBlacklistReportsResponse?: shared.GetBlacklistReportsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
