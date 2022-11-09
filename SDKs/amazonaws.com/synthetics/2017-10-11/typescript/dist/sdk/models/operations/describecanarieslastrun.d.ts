import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeCanariesLastRunQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeCanariesLastRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCanariesLastRunRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeCanariesLastRunRequest extends SpeakeasyBase {
    queryParams: DescribeCanariesLastRunQueryParams;
    headers: DescribeCanariesLastRunHeaders;
    request: DescribeCanariesLastRunRequestBody;
}
export declare class DescribeCanariesLastRunResponse extends SpeakeasyBase {
    contentType: string;
    describeCanariesLastRunResponse?: shared.DescribeCanariesLastRunResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
