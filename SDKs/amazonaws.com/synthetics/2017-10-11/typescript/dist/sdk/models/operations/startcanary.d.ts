import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StartCanaryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class StartCanaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartCanaryRequest extends SpeakeasyBase {
    pathParams: StartCanaryPathParams;
    headers: StartCanaryHeaders;
}
export declare class StartCanaryResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    startCanaryResponse?: Map<string, any>;
    statusCode: number;
    validationException?: any;
}
