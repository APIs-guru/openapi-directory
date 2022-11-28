import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInstanceAssociationsStatusQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeInstanceAssociationsStatusXAmzTargetEnum {
    AmazonSsmDescribeInstanceAssociationsStatus = "AmazonSSM.DescribeInstanceAssociationsStatus"
}
export declare class DescribeInstanceAssociationsStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstanceAssociationsStatusXAmzTargetEnum;
}
export declare class DescribeInstanceAssociationsStatusRequest extends SpeakeasyBase {
    queryParams: DescribeInstanceAssociationsStatusQueryParams;
    headers: DescribeInstanceAssociationsStatusHeaders;
    request: shared.DescribeInstanceAssociationsStatusRequest;
}
export declare class DescribeInstanceAssociationsStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeInstanceAssociationsStatusResult?: shared.DescribeInstanceAssociationsStatusResult;
    internalServerError?: any;
    invalidInstanceId?: any;
    invalidNextToken?: any;
    statusCode: number;
}
