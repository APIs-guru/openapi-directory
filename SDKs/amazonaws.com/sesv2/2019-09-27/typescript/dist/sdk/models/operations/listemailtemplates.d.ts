import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEmailTemplatesQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: number;
}
export declare class ListEmailTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEmailTemplatesRequest extends SpeakeasyBase {
    queryParams: ListEmailTemplatesQueryParams;
    headers: ListEmailTemplatesHeaders;
}
export declare class ListEmailTemplatesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listEmailTemplatesResponse?: shared.ListEmailTemplatesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
