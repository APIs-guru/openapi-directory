import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeParametersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeParametersXAmzTargetEnum {
    AmazonSsmDescribeParameters = "AmazonSSM.DescribeParameters"
}
export declare class DescribeParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeParametersXAmzTargetEnum;
}
export declare class DescribeParametersRequest extends SpeakeasyBase {
    queryParams: DescribeParametersQueryParams;
    headers: DescribeParametersHeaders;
    request: shared.DescribeParametersRequest;
}
export declare class DescribeParametersResponse extends SpeakeasyBase {
    contentType: string;
    describeParametersResult?: shared.DescribeParametersResult;
    internalServerError?: any;
    invalidFilterKey?: any;
    invalidFilterOption?: any;
    invalidFilterValue?: any;
    invalidNextToken?: any;
    statusCode: number;
}
