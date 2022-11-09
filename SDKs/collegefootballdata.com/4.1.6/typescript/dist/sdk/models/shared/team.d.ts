import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TeamLocation extends SpeakeasyBase {
    capacity?: number;
    city?: string;
    countryCode?: string;
    dome?: boolean;
    elevation?: number;
    grass?: boolean;
    latitude?: number;
    longitude?: number;
    name?: string;
    state?: string;
    timezone?: string;
    venueId?: number;
    yearConstructed?: number;
    zip?: string;
}
export declare class Team extends SpeakeasyBase {
    abbreviation?: string;
    altColor?: string;
    altName1?: string;
    altName2?: string;
    altName3?: string;
    color?: string;
    conference?: string;
    division?: string;
    id?: number;
    location?: TeamLocation;
    logos?: string[];
    mascot?: string;
    school?: string;
}
