import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAssociationExecutionTargetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeAssociationExecutionTargetsXAmzTargetEnum {
    AmazonSsmDescribeAssociationExecutionTargets = "AmazonSSM.DescribeAssociationExecutionTargets"
}
export declare class DescribeAssociationExecutionTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssociationExecutionTargetsXAmzTargetEnum;
}
export declare class DescribeAssociationExecutionTargetsRequest extends SpeakeasyBase {
    queryParams: DescribeAssociationExecutionTargetsQueryParams;
    headers: DescribeAssociationExecutionTargetsHeaders;
    request: shared.DescribeAssociationExecutionTargetsRequest;
}
export declare class DescribeAssociationExecutionTargetsResponse extends SpeakeasyBase {
    associationDoesNotExist?: any;
    associationExecutionDoesNotExist?: any;
    contentType: string;
    describeAssociationExecutionTargetsResult?: shared.DescribeAssociationExecutionTargetsResult;
    internalServerError?: any;
    invalidNextToken?: any;
    statusCode: number;
}
