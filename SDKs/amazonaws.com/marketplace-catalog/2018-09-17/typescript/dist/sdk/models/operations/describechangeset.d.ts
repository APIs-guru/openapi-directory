import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeChangeSetQueryParams extends SpeakeasyBase {
    catalog: string;
    changeSetId: string;
}
export declare class DescribeChangeSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeChangeSetRequest extends SpeakeasyBase {
    queryParams: DescribeChangeSetQueryParams;
    headers: DescribeChangeSetHeaders;
}
export declare class DescribeChangeSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeChangeSetResponse?: shared.DescribeChangeSetResponse;
    internalServiceException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
