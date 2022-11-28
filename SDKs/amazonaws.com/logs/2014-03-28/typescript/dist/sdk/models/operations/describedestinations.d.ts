import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDestinationsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeDestinationsXAmzTargetEnum {
    Logs20140328DescribeDestinations = "Logs_20140328.DescribeDestinations"
}
export declare class DescribeDestinationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDestinationsXAmzTargetEnum;
}
export declare class DescribeDestinationsRequest extends SpeakeasyBase {
    queryParams: DescribeDestinationsQueryParams;
    headers: DescribeDestinationsHeaders;
    request: shared.DescribeDestinationsRequest;
}
export declare class DescribeDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    describeDestinationsResponse?: shared.DescribeDestinationsResponse;
    invalidParameterException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
