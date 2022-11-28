import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInAppTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class CreateInAppTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * InApp Template Request.
**/
export declare class CreateInAppTemplateRequestBodyInAppTemplateRequest extends SpeakeasyBase {
    content?: shared.InAppMessageContent[];
    customConfig?: Map<string, string>;
    layout?: shared.LayoutEnum;
    templateDescription?: string;
    tags?: Map<string, string>;
}
export declare class CreateInAppTemplateRequestBody extends SpeakeasyBase {
    inAppTemplateRequest: CreateInAppTemplateRequestBodyInAppTemplateRequest;
}
export declare class CreateInAppTemplateRequest extends SpeakeasyBase {
    pathParams: CreateInAppTemplatePathParams;
    headers: CreateInAppTemplateHeaders;
    request: CreateInAppTemplateRequestBody;
}
export declare class CreateInAppTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createInAppTemplateResponse?: shared.CreateInAppTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
