import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class VenueLocation extends SpeakeasyBase {
    x?: number;
    y?: number;
}
export declare class Venue extends SpeakeasyBase {
    capacity?: number;
    city?: string;
    countryCode?: string;
    dome?: boolean;
    elevation?: number;
    grass?: boolean;
    id?: number;
    location?: VenueLocation;
    name?: string;
    state?: string;
    timezone?: string;
    year?: number;
    zip?: string;
}
