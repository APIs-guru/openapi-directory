import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchSuggestQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    q: string;
    rights: shared.RightsEnum;
}
export declare class SearchSuggestRequest extends SpeakeasyBase {
    queryParams: SearchSuggestQueryParams;
}
export declare class SearchSuggestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
