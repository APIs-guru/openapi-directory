import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PublishVersionPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class PublishVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PublishVersionRequestBody extends SpeakeasyBase {
    codeSha256?: string;
    description?: string;
    revisionId?: string;
}
export declare class PublishVersionRequest extends SpeakeasyBase {
    pathParams: PublishVersionPathParams;
    headers: PublishVersionHeaders;
    request: PublishVersionRequestBody;
}
export declare class PublishVersionResponse extends SpeakeasyBase {
    codeStorageExceededException?: any;
    contentType: string;
    functionConfiguration?: shared.FunctionConfiguration;
    invalidParameterValueException?: any;
    preconditionFailedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
