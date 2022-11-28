import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ClickStreamGetFilterEnum {
    Unknown = "",
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}
export declare class ClickStreamGetQueryParams extends SpeakeasyBase {
    conversion?: number;
    datapoint?: number;
    filter?: ClickStreamGetFilterEnum;
    group?: number;
    pageSize?: number;
}
export declare class ClickStreamGetRequest extends SpeakeasyBase {
    queryParams: ClickStreamGetQueryParams;
}
export declare class ClickStreamGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit;
    contentType: string;
    statusCode: number;
}
