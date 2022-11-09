import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.
**/
export declare class SearchPlaceIndexForTextSummary extends SpeakeasyBase {
    biasPosition?: number[];
    dataSource: string;
    filterBBox?: number[];
    filterCountries?: string[];
    maxResults?: number;
    resultBBox?: number[];
    text: string;
}
