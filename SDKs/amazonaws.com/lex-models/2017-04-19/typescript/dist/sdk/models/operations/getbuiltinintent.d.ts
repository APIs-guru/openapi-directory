import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBuiltinIntentPathParams extends SpeakeasyBase {
    signature: string;
}
export declare class GetBuiltinIntentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBuiltinIntentRequest extends SpeakeasyBase {
    pathParams: GetBuiltinIntentPathParams;
    headers: GetBuiltinIntentHeaders;
}
export declare class GetBuiltinIntentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBuiltinIntentResponse?: shared.GetBuiltinIntentResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
