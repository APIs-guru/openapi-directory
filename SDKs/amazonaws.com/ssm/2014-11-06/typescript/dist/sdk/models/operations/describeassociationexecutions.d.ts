import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAssociationExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeAssociationExecutionsXAmzTargetEnum {
    AmazonSsmDescribeAssociationExecutions = "AmazonSSM.DescribeAssociationExecutions"
}
export declare class DescribeAssociationExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssociationExecutionsXAmzTargetEnum;
}
export declare class DescribeAssociationExecutionsRequest extends SpeakeasyBase {
    queryParams: DescribeAssociationExecutionsQueryParams;
    headers: DescribeAssociationExecutionsHeaders;
    request: shared.DescribeAssociationExecutionsRequest;
}
export declare class DescribeAssociationExecutionsResponse extends SpeakeasyBase {
    associationDoesNotExist?: any;
    contentType: string;
    describeAssociationExecutionsResult?: shared.DescribeAssociationExecutionsResult;
    internalServerError?: any;
    invalidNextToken?: any;
    statusCode: number;
}
