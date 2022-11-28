import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAssetPropertyValueHistoryTimeOrderingEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class GetAssetPropertyValueHistoryQueryParams extends SpeakeasyBase {
    assetId?: string;
    endDate?: Date;
    maxResults?: number;
    nextToken?: string;
    propertyAlias?: string;
    propertyId?: string;
    qualities?: shared.QualityEnum[];
    startDate?: Date;
    timeOrdering?: GetAssetPropertyValueHistoryTimeOrderingEnum;
}
export declare class GetAssetPropertyValueHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssetPropertyValueHistoryRequest extends SpeakeasyBase {
    queryParams: GetAssetPropertyValueHistoryQueryParams;
    headers: GetAssetPropertyValueHistoryHeaders;
}
export declare class GetAssetPropertyValueHistoryResponse extends SpeakeasyBase {
    contentType: string;
    getAssetPropertyValueHistoryResponse?: shared.GetAssetPropertyValueHistoryResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
