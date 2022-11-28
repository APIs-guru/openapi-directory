import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagsGetTypeEnum {
    Tp = "tp",
    Tl = "tl",
    Dp = "dp",
    Gr = "gr"
}
export declare class TagsGetQueryParams extends SpeakeasyBase {
    datapoints?: string;
    groups?: string;
    limit?: number;
    name?: string;
    offset?: number;
    type?: TagsGetTypeEnum;
}
export declare class TagsGetRequest extends SpeakeasyBase {
    queryParams: TagsGetQueryParams;
}
export declare class TagsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
}
