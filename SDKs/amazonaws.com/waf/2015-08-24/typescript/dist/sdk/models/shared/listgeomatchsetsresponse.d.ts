import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GeoMatchSetSummary } from "./geomatchsetsummary";
export declare class ListGeoMatchSetsResponse extends SpeakeasyBase {
    geoMatchSets?: GeoMatchSetSummary[];
    nextMarker?: string;
}
