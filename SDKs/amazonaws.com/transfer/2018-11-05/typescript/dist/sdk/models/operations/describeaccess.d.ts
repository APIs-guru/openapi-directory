import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAccessXAmzTargetEnum {
    TransferServiceDescribeAccess = "TransferService.DescribeAccess"
}
export declare class DescribeAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccessXAmzTargetEnum;
}
export declare class DescribeAccessRequest extends SpeakeasyBase {
    headers: DescribeAccessHeaders;
    request: shared.DescribeAccessRequest;
}
export declare class DescribeAccessResponse extends SpeakeasyBase {
    contentType: string;
    describeAccessResponse?: shared.DescribeAccessResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
