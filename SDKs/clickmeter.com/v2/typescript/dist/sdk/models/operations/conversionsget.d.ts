import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConversionsGetStatusEnum {
    Deleted = "deleted",
    Active = "active"
}
export declare class ConversionsGetQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    limit?: number;
    offset?: number;
    status?: ConversionsGetStatusEnum;
    textSearch?: string;
}
export declare class ConversionsGetRequest extends SpeakeasyBase {
    queryParams: ConversionsGetQueryParams;
}
export declare class ConversionsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
