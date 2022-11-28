import { SpeakeasyBase } from "../../../internal/utils";
import { Artist } from "./artist";
import { Entertainment } from "./entertainment";
import { FacetEvent } from "./facetevent";
import { Location } from "./location";
import { SpecificPeople } from "./specificpeople";
export declare class SearchFacetsResponse extends SpeakeasyBase {
    artists?: Artist[];
    entertainment?: Entertainment[];
    events?: FacetEvent[];
    locations?: Location[];
    specificPeople?: SpecificPeople[];
}
