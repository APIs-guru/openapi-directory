import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTemplateVersionsPathParams extends SpeakeasyBase {
    templateName: string;
    templateType: string;
}
export declare class ListTemplateVersionsQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: string;
}
export declare class ListTemplateVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTemplateVersionsRequest extends SpeakeasyBase {
    pathParams: ListTemplateVersionsPathParams;
    queryParams: ListTemplateVersionsQueryParams;
    headers: ListTemplateVersionsHeaders;
}
export declare class ListTemplateVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listTemplateVersionsResponse?: shared.ListTemplateVersionsResponse;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
