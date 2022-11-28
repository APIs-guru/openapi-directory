import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWorldExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The output location.
**/
export declare class CreateWorldExportJobRequestBodyOutputLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Prefix?: string;
}
export declare class CreateWorldExportJobRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    iamRole: string;
    outputLocation: CreateWorldExportJobRequestBodyOutputLocation;
    tags?: Map<string, string>;
    worlds: string[];
}
export declare class CreateWorldExportJobRequest extends SpeakeasyBase {
    headers: CreateWorldExportJobHeaders;
    request: CreateWorldExportJobRequestBody;
}
export declare class CreateWorldExportJobResponse extends SpeakeasyBase {
    contentType: string;
    createWorldExportJobResponse?: shared.CreateWorldExportJobResponse;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
