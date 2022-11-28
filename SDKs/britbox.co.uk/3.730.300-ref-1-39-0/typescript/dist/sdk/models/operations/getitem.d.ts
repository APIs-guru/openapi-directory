import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetItemExpandEnum {
    All = "all",
    Children = "children",
    Ancestors = "ancestors",
    Parent = "parent"
}
export declare enum GetItemSelectSeasonEnum {
    First = "first",
    Latest = "latest"
}
export declare class GetItemQueryParams extends SpeakeasyBase {
    device?: string;
    expand?: GetItemExpandEnum;
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    maxRating?: string;
    segments?: string[];
    selectSeason?: GetItemSelectSeasonEnum;
    sub?: string;
    useCustomId?: boolean;
}
export declare class GetItemRequest extends SpeakeasyBase {
    pathParams: GetItemPathParams;
    queryParams: GetItemQueryParams;
}
export declare class GetItemResponse extends SpeakeasyBase {
    contentType: string;
    itemDetail?: shared.ItemDetail;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
