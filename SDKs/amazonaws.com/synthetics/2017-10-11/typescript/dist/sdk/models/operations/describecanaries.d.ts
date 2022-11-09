import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeCanariesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeCanariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCanariesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeCanariesRequest extends SpeakeasyBase {
    queryParams: DescribeCanariesQueryParams;
    headers: DescribeCanariesHeaders;
    request: DescribeCanariesRequestBody;
}
export declare class DescribeCanariesResponse extends SpeakeasyBase {
    contentType: string;
    describeCanariesResponse?: shared.DescribeCanariesResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
