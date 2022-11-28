import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeServicesXAmzTargetEnum {
    AwsSupport20130415DescribeServices = "AWSSupport_20130415.DescribeServices"
}
export declare class DescribeServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServicesXAmzTargetEnum;
}
export declare class DescribeServicesRequest extends SpeakeasyBase {
    headers: DescribeServicesHeaders;
    request: shared.DescribeServicesRequest;
}
export declare class DescribeServicesResponse extends SpeakeasyBase {
    contentType: string;
    describeServicesResponse?: shared.DescribeServicesResponse;
    internalServerError?: any;
    statusCode: number;
}
