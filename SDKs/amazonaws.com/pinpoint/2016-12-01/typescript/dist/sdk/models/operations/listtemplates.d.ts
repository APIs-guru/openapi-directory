import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTemplatesQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: string;
    prefix?: string;
    templateType?: string;
}
export declare class ListTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTemplatesRequest extends SpeakeasyBase {
    queryParams: ListTemplatesQueryParams;
    headers: ListTemplatesHeaders;
}
export declare class ListTemplatesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listTemplatesResponse?: shared.ListTemplatesResponse;
    methodNotAllowedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
