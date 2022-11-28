import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInstanceInformationQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeInstanceInformationXAmzTargetEnum {
    AmazonSsmDescribeInstanceInformation = "AmazonSSM.DescribeInstanceInformation"
}
export declare class DescribeInstanceInformationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstanceInformationXAmzTargetEnum;
}
export declare class DescribeInstanceInformationRequest extends SpeakeasyBase {
    queryParams: DescribeInstanceInformationQueryParams;
    headers: DescribeInstanceInformationHeaders;
    request: shared.DescribeInstanceInformationRequest;
}
export declare class DescribeInstanceInformationResponse extends SpeakeasyBase {
    contentType: string;
    describeInstanceInformationResult?: shared.DescribeInstanceInformationResult;
    internalServerError?: any;
    invalidFilterKey?: any;
    invalidInstanceId?: any;
    invalidInstanceInformationFilterValue?: any;
    invalidNextToken?: any;
    statusCode: number;
}
