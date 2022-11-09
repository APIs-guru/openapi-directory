import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetProgrammesByCategoryPathParams extends SpeakeasyBase {
    category: string;
}
export declare class GetProgrammesByCategoryQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    page: number;
    perPage: number;
    rights: shared.RightsEnum;
}
export declare class GetProgrammesByCategoryRequest extends SpeakeasyBase {
    pathParams: GetProgrammesByCategoryPathParams;
    queryParams: GetProgrammesByCategoryQueryParams;
}
export declare class GetProgrammesByCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
