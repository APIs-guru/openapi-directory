import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopCanaryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class StopCanaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopCanaryRequest extends SpeakeasyBase {
    pathParams: StopCanaryPathParams;
    headers: StopCanaryHeaders;
}
export declare class StopCanaryResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopCanaryResponse?: Map<string, any>;
    validationException?: any;
}
