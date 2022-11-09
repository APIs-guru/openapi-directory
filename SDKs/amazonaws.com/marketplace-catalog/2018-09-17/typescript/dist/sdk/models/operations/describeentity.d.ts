import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeEntityQueryParams extends SpeakeasyBase {
    catalog: string;
    entityId: string;
}
export declare class DescribeEntityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeEntityRequest extends SpeakeasyBase {
    queryParams: DescribeEntityQueryParams;
    headers: DescribeEntityHeaders;
}
export declare class DescribeEntityResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeEntityResponse?: shared.DescribeEntityResponse;
    internalServiceException?: any;
    resourceNotFoundException?: any;
    resourceNotSupportedException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
