import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomVerificationEmailTemplatesQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: number;
}
export declare class ListCustomVerificationEmailTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCustomVerificationEmailTemplatesRequest extends SpeakeasyBase {
    queryParams: ListCustomVerificationEmailTemplatesQueryParams;
    headers: ListCustomVerificationEmailTemplatesHeaders;
}
export declare class ListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listCustomVerificationEmailTemplatesResponse?: shared.ListCustomVerificationEmailTemplatesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
