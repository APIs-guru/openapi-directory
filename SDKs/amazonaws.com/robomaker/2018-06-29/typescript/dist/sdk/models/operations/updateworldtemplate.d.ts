import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateWorldTemplateHeaders extends SpeakeasyBase {
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
export declare class UpdateWorldTemplateRequestBodyTemplateLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
}
export declare class UpdateWorldTemplateRequestBody extends SpeakeasyBase {
    name?: string;
    template: string;
    templateBody?: string;
    templateLocation?: UpdateWorldTemplateRequestBodyTemplateLocation;
}
export declare class UpdateWorldTemplateRequest extends SpeakeasyBase {
    headers: UpdateWorldTemplateHeaders;
    request: UpdateWorldTemplateRequestBody;
}
export declare class UpdateWorldTemplateResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateWorldTemplateResponse?: shared.UpdateWorldTemplateResponse;
}
