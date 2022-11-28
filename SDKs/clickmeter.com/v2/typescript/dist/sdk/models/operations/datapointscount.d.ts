import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DataPointsCountStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare enum DataPointsCountTypeEnum {
    Tp = "tp",
    Tl = "tl"
}
export declare class DataPointsCountQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    onlyFavorites?: boolean;
    status?: DataPointsCountStatusEnum;
    tags?: string;
    textSearch?: string;
    type?: DataPointsCountTypeEnum;
}
export declare class DataPointsCountRequest extends SpeakeasyBase {
    queryParams: DataPointsCountQueryParams;
}
export declare class DataPointsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
