import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDeviceFleetXAmzTargetEnum {
    SageMakerDescribeDeviceFleet = "SageMaker.DescribeDeviceFleet"
}
export declare class DescribeDeviceFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeviceFleetXAmzTargetEnum;
}
export declare class DescribeDeviceFleetRequest extends SpeakeasyBase {
    headers: DescribeDeviceFleetHeaders;
    request: shared.DescribeDeviceFleetRequest;
}
export declare class DescribeDeviceFleetResponse extends SpeakeasyBase {
    contentType: string;
    describeDeviceFleetResponse?: shared.DescribeDeviceFleetResponse;
    resourceNotFound?: any;
    statusCode: number;
}
