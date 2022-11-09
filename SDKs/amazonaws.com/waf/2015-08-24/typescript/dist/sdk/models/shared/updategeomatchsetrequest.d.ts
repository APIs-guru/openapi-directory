import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GeoMatchSetUpdate } from "./geomatchsetupdate";
export declare class UpdateGeoMatchSetRequest extends SpeakeasyBase {
    changeToken: string;
    geoMatchSetId: string;
    updates: GeoMatchSetUpdate[];
}
