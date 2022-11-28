import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSessionPathParams extends SpeakeasyBase {
    botAlias: string;
    botName: string;
    userId: string;
}
export declare class GetSessionQueryParams extends SpeakeasyBase {
    checkpointLabelFilter?: string;
}
export declare class GetSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSessionRequest extends SpeakeasyBase {
    pathParams: GetSessionPathParams;
    queryParams: GetSessionQueryParams;
    headers: GetSessionHeaders;
}
export declare class GetSessionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getSessionResponse?: shared.GetSessionResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
