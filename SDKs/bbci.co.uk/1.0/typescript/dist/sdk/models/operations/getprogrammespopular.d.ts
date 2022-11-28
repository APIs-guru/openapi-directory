import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgrammesPopularQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    initialChildCount: number;
    mixin?: string[];
    page: number;
    perPage: number;
    rights: shared.RightsEnum;
    sort: string;
    sortDirection: shared.SortDirectionEnum;
}
export declare class GetProgrammesPopularRequest extends SpeakeasyBase {
    queryParams: GetProgrammesPopularQueryParams;
}
export declare class GetProgrammesPopularResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
