import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDeviceXAmzTargetEnum {
    SageMakerDescribeDevice = "SageMaker.DescribeDevice"
}
export declare class DescribeDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeviceXAmzTargetEnum;
}
export declare class DescribeDeviceRequest extends SpeakeasyBase {
    headers: DescribeDeviceHeaders;
    request: shared.DescribeDeviceRequest;
}
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    contentType: string;
    describeDeviceResponse?: shared.DescribeDeviceResponse;
    resourceNotFound?: any;
    statusCode: number;
}
