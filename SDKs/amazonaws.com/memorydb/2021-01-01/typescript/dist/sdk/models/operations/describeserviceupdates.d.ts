import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeServiceUpdatesXAmzTargetEnum {
    AmazonMemoryDbDescribeServiceUpdates = "AmazonMemoryDB.DescribeServiceUpdates"
}
export declare class DescribeServiceUpdatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceUpdatesXAmzTargetEnum;
}
export declare class DescribeServiceUpdatesRequest extends SpeakeasyBase {
    headers: DescribeServiceUpdatesHeaders;
    request: shared.DescribeServiceUpdatesRequest;
}
export declare class DescribeServiceUpdatesResponse extends SpeakeasyBase {
    contentType: string;
    describeServiceUpdatesResponse?: shared.DescribeServiceUpdatesResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    statusCode: number;
}
