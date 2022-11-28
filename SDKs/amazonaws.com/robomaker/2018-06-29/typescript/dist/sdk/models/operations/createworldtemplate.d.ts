import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWorldTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information about a template location.
**/
export declare class CreateWorldTemplateRequestBodyTemplateLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
}
export declare class CreateWorldTemplateRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    name?: string;
    tags?: Map<string, string>;
    templateBody?: string;
    templateLocation?: CreateWorldTemplateRequestBodyTemplateLocation;
}
export declare class CreateWorldTemplateRequest extends SpeakeasyBase {
    headers: CreateWorldTemplateHeaders;
    request: CreateWorldTemplateRequestBody;
}
export declare class CreateWorldTemplateResponse extends SpeakeasyBase {
    contentType: string;
    createWorldTemplateResponse?: shared.CreateWorldTemplateResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
