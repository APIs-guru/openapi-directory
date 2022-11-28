import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeReturnShippingLabelXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeReturnShippingLabel = "AWSIESnowballJobManagementService.DescribeReturnShippingLabel"
}
export declare class DescribeReturnShippingLabelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReturnShippingLabelXAmzTargetEnum;
}
export declare class DescribeReturnShippingLabelRequest extends SpeakeasyBase {
    headers: DescribeReturnShippingLabelHeaders;
    request: shared.DescribeReturnShippingLabelRequest;
}
export declare class DescribeReturnShippingLabelResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    describeReturnShippingLabelResult?: shared.DescribeReturnShippingLabelResult;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    statusCode: number;
}
