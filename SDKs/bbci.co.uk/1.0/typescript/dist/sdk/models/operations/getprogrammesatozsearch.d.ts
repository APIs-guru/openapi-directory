import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgrammesAtoZSearchPathParams extends SpeakeasyBase {
    letter: string;
}
export declare enum GetProgrammesAtoZSearchSortEnum {
    Title = "title"
}
export declare class GetProgrammesAtoZSearchQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    initialChildCount: number;
    page: number;
    perPage: number;
    rights: shared.RightsEnum;
    sort: GetProgrammesAtoZSearchSortEnum;
    sortDirection: shared.SortDirectionEnum;
}
export declare class GetProgrammesAtoZSearchRequest extends SpeakeasyBase {
    pathParams: GetProgrammesAtoZSearchPathParams;
    queryParams: GetProgrammesAtoZSearchQueryParams;
}
export declare class GetProgrammesAtoZSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
