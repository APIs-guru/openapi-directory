import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTableXAmzTargetEnum {
    Timestream20181101DescribeTable = "Timestream_20181101.DescribeTable"
}
export declare class DescribeTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTableXAmzTargetEnum;
}
export declare class DescribeTableRequest extends SpeakeasyBase {
    headers: DescribeTableHeaders;
    request: shared.DescribeTableRequest;
}
export declare class DescribeTableResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeTableResponse?: shared.DescribeTableResponse;
    internalServerException?: any;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
