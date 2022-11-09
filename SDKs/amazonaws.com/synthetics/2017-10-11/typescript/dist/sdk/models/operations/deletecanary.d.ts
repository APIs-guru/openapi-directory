import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteCanaryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteCanaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCanaryRequest extends SpeakeasyBase {
    pathParams: DeleteCanaryPathParams;
    headers: DeleteCanaryHeaders;
}
export declare class DeleteCanaryResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteCanaryResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
