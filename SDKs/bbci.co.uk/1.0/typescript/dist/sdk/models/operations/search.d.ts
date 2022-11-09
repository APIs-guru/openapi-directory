import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    q: string;
    rights: shared.RightsEnum;
}
export declare class SearchRequest extends SpeakeasyBase {
    queryParams: SearchQueryParams;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
