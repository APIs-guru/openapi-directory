import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateInAppTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class UpdateInAppTemplateQueryParams extends SpeakeasyBase {
    createNewVersion?: boolean;
    version?: string;
}
export declare class UpdateInAppTemplateHeaders extends SpeakeasyBase {
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
export declare class UpdateInAppTemplateRequestBodyInAppTemplateRequest extends SpeakeasyBase {
    content?: shared.InAppMessageContent[];
    customConfig?: Map<string, string>;
    layout?: shared.LayoutEnum;
    templateDescription?: string;
    tags?: Map<string, string>;
}
export declare class UpdateInAppTemplateRequestBody extends SpeakeasyBase {
    inAppTemplateRequest: UpdateInAppTemplateRequestBodyInAppTemplateRequest;
}
export declare class UpdateInAppTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateInAppTemplatePathParams;
    queryParams: UpdateInAppTemplateQueryParams;
    headers: UpdateInAppTemplateHeaders;
    request: UpdateInAppTemplateRequestBody;
}
export declare class UpdateInAppTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateInAppTemplateResponse?: shared.UpdateInAppTemplateResponse;
}
