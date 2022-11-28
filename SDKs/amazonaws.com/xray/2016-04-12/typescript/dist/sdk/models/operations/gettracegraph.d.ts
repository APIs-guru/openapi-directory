import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTraceGraphQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetTraceGraphHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTraceGraphRequestBody extends SpeakeasyBase {
    nextToken?: string;
    traceIds: string[];
}
export declare class GetTraceGraphRequest extends SpeakeasyBase {
    queryParams: GetTraceGraphQueryParams;
    headers: GetTraceGraphHeaders;
    request: GetTraceGraphRequestBody;
}
export declare class GetTraceGraphResponse extends SpeakeasyBase {
    contentType: string;
    getTraceGraphResult?: shared.GetTraceGraphResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
