import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInterpolatedAssetPropertyValuesQualityEnum {
    Good = "GOOD",
    Bad = "BAD",
    Uncertain = "UNCERTAIN"
}
export declare class GetInterpolatedAssetPropertyValuesQueryParams extends SpeakeasyBase {
    assetId?: string;
    endTimeInSeconds: number;
    endTimeOffsetInNanos?: number;
    intervalInSeconds: number;
    intervalWindowInSeconds?: number;
    maxResults?: number;
    nextToken?: string;
    propertyAlias?: string;
    propertyId?: string;
    quality: GetInterpolatedAssetPropertyValuesQualityEnum;
    startTimeInSeconds: number;
    startTimeOffsetInNanos?: number;
    type: string;
}
export declare class GetInterpolatedAssetPropertyValuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInterpolatedAssetPropertyValuesRequest extends SpeakeasyBase {
    queryParams: GetInterpolatedAssetPropertyValuesQueryParams;
    headers: GetInterpolatedAssetPropertyValuesHeaders;
}
export declare class GetInterpolatedAssetPropertyValuesResponse extends SpeakeasyBase {
    contentType: string;
    getInterpolatedAssetPropertyValuesResponse?: shared.GetInterpolatedAssetPropertyValuesResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
