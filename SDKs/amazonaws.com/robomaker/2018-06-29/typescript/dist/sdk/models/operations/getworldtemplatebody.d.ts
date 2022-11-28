import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorldTemplateBodyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetWorldTemplateBodyRequestBody extends SpeakeasyBase {
    generationJob?: string;
    template?: string;
}
export declare class GetWorldTemplateBodyRequest extends SpeakeasyBase {
    headers: GetWorldTemplateBodyHeaders;
    request: GetWorldTemplateBodyRequestBody;
}
export declare class GetWorldTemplateBodyResponse extends SpeakeasyBase {
    contentType: string;
    getWorldTemplateBodyResponse?: shared.GetWorldTemplateBodyResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
