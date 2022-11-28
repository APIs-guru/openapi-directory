import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDeviceEc2InstancesPathParams extends SpeakeasyBase {
    managedDeviceId: string;
}
export declare class DescribeDeviceEc2InstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDeviceEc2InstancesRequestBody extends SpeakeasyBase {
    instanceIds: string[];
}
export declare class DescribeDeviceEc2InstancesRequest extends SpeakeasyBase {
    pathParams: DescribeDeviceEc2InstancesPathParams;
    headers: DescribeDeviceEc2InstancesHeaders;
    request: DescribeDeviceEc2InstancesRequestBody;
}
export declare class DescribeDeviceEc2InstancesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeDeviceEc2Output?: shared.DescribeDeviceEc2Output;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
