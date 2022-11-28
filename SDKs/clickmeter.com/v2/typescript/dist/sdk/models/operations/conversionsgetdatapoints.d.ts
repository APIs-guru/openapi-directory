import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsGetDatapointsPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare enum ConversionsGetDatapointsStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum ConversionsGetDatapointsTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class ConversionsGetDatapointsQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    limit?: number;
    offset?: number;
    status?: ConversionsGetDatapointsStatusEnum;
    tags?: string;
    textSearch?: string;
    type?: ConversionsGetDatapointsTypeEnum;
}
export declare class ConversionsGetDatapointsRequest extends SpeakeasyBase {
    pathParams: ConversionsGetDatapointsPathParams;
    queryParams: ConversionsGetDatapointsQueryParams;
}
export declare class ConversionsGetDatapointsResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
