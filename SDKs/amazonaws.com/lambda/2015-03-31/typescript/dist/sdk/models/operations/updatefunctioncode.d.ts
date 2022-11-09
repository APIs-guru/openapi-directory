import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateFunctionCodePathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class UpdateFunctionCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFunctionCodeRequestBody extends SpeakeasyBase {
    dryRun?: boolean;
    imageUri?: string;
    publish?: boolean;
    revisionId?: string;
    s3Bucket?: string;
    s3Key?: string;
    s3ObjectVersion?: string;
    zipFile?: string;
}
export declare class UpdateFunctionCodeRequest extends SpeakeasyBase {
    pathParams: UpdateFunctionCodePathParams;
    headers: UpdateFunctionCodeHeaders;
    request: UpdateFunctionCodeRequestBody;
}
export declare class UpdateFunctionCodeResponse extends SpeakeasyBase {
    codeSigningConfigNotFoundException?: any;
    codeStorageExceededException?: any;
    codeVerificationFailedException?: any;
    contentType: string;
    functionConfiguration?: shared.FunctionConfiguration;
    invalidCodeSignatureException?: any;
    invalidParameterValueException?: any;
    preconditionFailedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
