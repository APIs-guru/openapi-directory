import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHighlightsByCategoryPathParams extends SpeakeasyBase {
    category: string;
}
export declare class GetHighlightsByCategoryQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    mixin?: string[];
    rights: shared.RightsEnum;
}
export declare class GetHighlightsByCategoryRequest extends SpeakeasyBase {
    pathParams: GetHighlightsByCategoryPathParams;
    queryParams: GetHighlightsByCategoryQueryParams;
}
export declare class GetHighlightsByCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
