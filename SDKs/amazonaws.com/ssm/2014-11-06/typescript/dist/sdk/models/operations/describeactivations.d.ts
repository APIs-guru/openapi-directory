import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeActivationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeActivationsXAmzTargetEnum {
    AmazonSsmDescribeActivations = "AmazonSSM.DescribeActivations"
}
export declare class DescribeActivationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeActivationsXAmzTargetEnum;
}
export declare class DescribeActivationsRequest extends SpeakeasyBase {
    queryParams: DescribeActivationsQueryParams;
    headers: DescribeActivationsHeaders;
    request: shared.DescribeActivationsRequest;
}
export declare class DescribeActivationsResponse extends SpeakeasyBase {
    contentType: string;
    describeActivationsResult?: shared.DescribeActivationsResult;
    internalServerError?: any;
    invalidFilter?: any;
    invalidNextToken?: any;
    statusCode: number;
}
