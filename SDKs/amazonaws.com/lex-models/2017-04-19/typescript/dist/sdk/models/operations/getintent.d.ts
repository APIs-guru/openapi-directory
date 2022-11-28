import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntentPathParams extends SpeakeasyBase {
    name: string;
    version: string;
}
export declare class GetIntentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIntentRequest extends SpeakeasyBase {
    pathParams: GetIntentPathParams;
    headers: GetIntentHeaders;
}
export declare class GetIntentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getIntentResponse?: shared.GetIntentResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
