import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEpisodesByGroupPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetEpisodesByGroupQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    initialChildCount: number;
    mixin?: string[];
    page: number;
    perPage: number;
    rights: shared.RightsEnum;
    sort: string;
    sortDirection: shared.SortDirectionEnum;
}
export declare class GetEpisodesByGroupRequest extends SpeakeasyBase {
    pathParams: GetEpisodesByGroupPathParams;
    queryParams: GetEpisodesByGroupQueryParams;
}
export declare class GetEpisodesByGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
