import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAssetPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class DescribeAssetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAssetRequest extends SpeakeasyBase {
    pathParams: DescribeAssetPathParams;
    headers: DescribeAssetHeaders;
}
export declare class DescribeAssetResponse extends SpeakeasyBase {
    contentType: string;
    describeAssetResponse?: shared.DescribeAssetResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
