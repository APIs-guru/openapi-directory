import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeNamespaceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDescribeNamespace = "IotThingsGraphFrontEndService.DescribeNamespace"
}
export declare class DescribeNamespaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNamespaceXAmzTargetEnum;
}
export declare class DescribeNamespaceRequest extends SpeakeasyBase {
    headers: DescribeNamespaceHeaders;
    request: shared.DescribeNamespaceRequest;
}
export declare class DescribeNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    describeNamespaceResponse?: shared.DescribeNamespaceResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
