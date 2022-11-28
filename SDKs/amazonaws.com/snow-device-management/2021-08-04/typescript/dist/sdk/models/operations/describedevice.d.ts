import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDevicePathParams extends SpeakeasyBase {
    managedDeviceId: string;
}
export declare class DescribeDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDeviceRequest extends SpeakeasyBase {
    pathParams: DescribeDevicePathParams;
    headers: DescribeDeviceHeaders;
}
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeDeviceOutput?: shared.DescribeDeviceOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
