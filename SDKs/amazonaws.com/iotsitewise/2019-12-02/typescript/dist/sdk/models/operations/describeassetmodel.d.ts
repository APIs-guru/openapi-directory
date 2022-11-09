import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAssetModelPathParams extends SpeakeasyBase {
    assetModelId: string;
}
export declare class DescribeAssetModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAssetModelRequest extends SpeakeasyBase {
    pathParams: DescribeAssetModelPathParams;
    headers: DescribeAssetModelHeaders;
}
export declare class DescribeAssetModelResponse extends SpeakeasyBase {
    contentType: string;
    describeAssetModelResponse?: shared.DescribeAssetModelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
