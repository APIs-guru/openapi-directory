import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgrammeRecommendationsPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetProgrammeRecommendationsQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    page: number;
    perPage: number;
    rights: shared.RightsEnum;
}
export declare class GetProgrammeRecommendationsRequest extends SpeakeasyBase {
    pathParams: GetProgrammeRecommendationsPathParams;
    queryParams: GetProgrammeRecommendationsQueryParams;
}
export declare class GetProgrammeRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
