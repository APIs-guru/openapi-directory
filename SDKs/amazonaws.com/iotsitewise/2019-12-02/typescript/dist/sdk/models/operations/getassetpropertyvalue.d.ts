import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAssetPropertyValueQueryParams extends SpeakeasyBase {
    assetId?: string;
    propertyAlias?: string;
    propertyId?: string;
}
export declare class GetAssetPropertyValueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssetPropertyValueRequest extends SpeakeasyBase {
    queryParams: GetAssetPropertyValueQueryParams;
    headers: GetAssetPropertyValueHeaders;
}
export declare class GetAssetPropertyValueResponse extends SpeakeasyBase {
    contentType: string;
    getAssetPropertyValueResponse?: shared.GetAssetPropertyValueResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
