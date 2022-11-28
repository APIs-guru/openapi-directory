import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DeleteEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEmailTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteEmailTemplatePathParams;
    headers: DeleteEmailTemplateHeaders;
}
export declare class DeleteEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteEmailTemplateResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
