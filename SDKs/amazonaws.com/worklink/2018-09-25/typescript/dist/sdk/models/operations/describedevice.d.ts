import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDeviceRequestBody extends SpeakeasyBase {
    deviceId: string;
    fleetArn: string;
}
export declare class DescribeDeviceRequest extends SpeakeasyBase {
    headers: DescribeDeviceHeaders;
    request: DescribeDeviceRequestBody;
}
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    contentType: string;
    describeDeviceResponse?: shared.DescribeDeviceResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
