import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.
**/
export declare class SearchPlaceIndexForPositionSummary extends SpeakeasyBase {
    dataSource: string;
    maxResults?: number;
    position: number[];
}
