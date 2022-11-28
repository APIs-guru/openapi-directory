import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeServerXAmzTargetEnum {
    TransferServiceDescribeServer = "TransferService.DescribeServer"
}
export declare class DescribeServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServerXAmzTargetEnum;
}
export declare class DescribeServerRequest extends SpeakeasyBase {
    headers: DescribeServerHeaders;
    request: shared.DescribeServerRequest;
}
export declare class DescribeServerResponse extends SpeakeasyBase {
    contentType: string;
    describeServerResponse?: shared.DescribeServerResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
