import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWorldTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteWorldTemplateRequestBody extends SpeakeasyBase {
    template: string;
}
export declare class DeleteWorldTemplateRequest extends SpeakeasyBase {
    headers: DeleteWorldTemplateHeaders;
    request: DeleteWorldTemplateRequestBody;
}
export declare class DeleteWorldTemplateResponse extends SpeakeasyBase {
    contentType: string;
    deleteWorldTemplateResponse?: Map<string, any>;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
