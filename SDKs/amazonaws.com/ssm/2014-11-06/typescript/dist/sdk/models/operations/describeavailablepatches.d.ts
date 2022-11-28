import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAvailablePatchesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeAvailablePatchesXAmzTargetEnum {
    AmazonSsmDescribeAvailablePatches = "AmazonSSM.DescribeAvailablePatches"
}
export declare class DescribeAvailablePatchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAvailablePatchesXAmzTargetEnum;
}
export declare class DescribeAvailablePatchesRequest extends SpeakeasyBase {
    queryParams: DescribeAvailablePatchesQueryParams;
    headers: DescribeAvailablePatchesHeaders;
    request: shared.DescribeAvailablePatchesRequest;
}
export declare class DescribeAvailablePatchesResponse extends SpeakeasyBase {
    contentType: string;
    describeAvailablePatchesResult?: shared.DescribeAvailablePatchesResult;
    internalServerError?: any;
    statusCode: number;
}
