import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWorkerConfigurationPathParams extends SpeakeasyBase {
    workerConfigurationArn: string;
}
export declare class DescribeWorkerConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorkerConfigurationRequest extends SpeakeasyBase {
    pathParams: DescribeWorkerConfigurationPathParams;
    headers: DescribeWorkerConfigurationHeaders;
}
export declare class DescribeWorkerConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeWorkerConfigurationResponse?: shared.DescribeWorkerConfigurationResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
