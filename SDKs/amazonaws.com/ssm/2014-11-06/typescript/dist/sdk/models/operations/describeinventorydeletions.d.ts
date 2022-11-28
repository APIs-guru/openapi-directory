import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInventoryDeletionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeInventoryDeletionsXAmzTargetEnum {
    AmazonSsmDescribeInventoryDeletions = "AmazonSSM.DescribeInventoryDeletions"
}
export declare class DescribeInventoryDeletionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInventoryDeletionsXAmzTargetEnum;
}
export declare class DescribeInventoryDeletionsRequest extends SpeakeasyBase {
    queryParams: DescribeInventoryDeletionsQueryParams;
    headers: DescribeInventoryDeletionsHeaders;
    request: shared.DescribeInventoryDeletionsRequest;
}
export declare class DescribeInventoryDeletionsResponse extends SpeakeasyBase {
    contentType: string;
    describeInventoryDeletionsResult?: shared.DescribeInventoryDeletionsResult;
    internalServerError?: any;
    invalidDeletionIdException?: any;
    invalidNextToken?: any;
    statusCode: number;
}
