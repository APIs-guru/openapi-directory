import { SpeakeasyBase } from "../../../internal/utils";
export declare class UntagResourcePathParams extends SpeakeasyBase {
    arn: string;
}
export declare class UntagResourceQueryParams extends SpeakeasyBase {
    tagKeys: string[];
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    pathParams: UntagResourcePathParams;
    queryParams: UntagResourceQueryParams;
    headers: UntagResourceHeaders;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
