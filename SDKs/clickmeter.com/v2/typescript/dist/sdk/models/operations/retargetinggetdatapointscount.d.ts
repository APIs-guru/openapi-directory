import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetargetingGetDatapointsCountPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum RetargetingGetDatapointsCountStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}
export declare class RetargetingGetDatapointsCountQueryParams extends SpeakeasyBase {
    createdAfter?: string;
    createdBefore?: string;
    onlyFavorites?: boolean;
    status?: RetargetingGetDatapointsCountStatusEnum;
    tags?: string;
    textSearch?: string;
}
export declare class RetargetingGetDatapointsCountRequest extends SpeakeasyBase {
    pathParams: RetargetingGetDatapointsCountPathParams;
    queryParams: RetargetingGetDatapointsCountQueryParams;
}
export declare class RetargetingGetDatapointsCountResponse extends SpeakeasyBase {
    apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
