import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetAssetPropertyAggregatesTimeOrderingEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class GetAssetPropertyAggregatesQueryParams extends SpeakeasyBase {
    aggregateTypes: shared.AggregateTypeEnum[];
    assetId?: string;
    endDate: Date;
    maxResults?: number;
    nextToken?: string;
    propertyAlias?: string;
    propertyId?: string;
    qualities?: shared.QualityEnum[];
    resolution: string;
    startDate: Date;
    timeOrdering?: GetAssetPropertyAggregatesTimeOrderingEnum;
}
export declare class GetAssetPropertyAggregatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssetPropertyAggregatesRequest extends SpeakeasyBase {
    queryParams: GetAssetPropertyAggregatesQueryParams;
    headers: GetAssetPropertyAggregatesHeaders;
}
export declare class GetAssetPropertyAggregatesResponse extends SpeakeasyBase {
    contentType: string;
    getAssetPropertyAggregatesResponse?: shared.GetAssetPropertyAggregatesResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
