import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAssetPropertyPathParams extends SpeakeasyBase {
    assetId: string;
    propertyId: string;
}
export declare class DescribeAssetPropertyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAssetPropertyRequest extends SpeakeasyBase {
    pathParams: DescribeAssetPropertyPathParams;
    headers: DescribeAssetPropertyHeaders;
}
export declare class DescribeAssetPropertyResponse extends SpeakeasyBase {
    contentType: string;
    describeAssetPropertyResponse?: shared.DescribeAssetPropertyResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
