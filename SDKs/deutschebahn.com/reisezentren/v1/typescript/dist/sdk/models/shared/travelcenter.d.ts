import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Opening times of the travel center, ordered by week day
**/
export declare class TravelCenterOpeningTimes extends SpeakeasyBase {
    fri?: string[];
    mon?: string[];
    sat?: string[];
    sun?: string[];
    thu?: string[];
    tue?: string[];
    wed?: string[];
}
export declare enum TravelCenterTypeEnum {
    Reisezentrum = "Reisezentrum",
    MobilityCenter = "Mobility Center"
}
export declare class TravelCenter extends SpeakeasyBase {
    address?: string;
    city?: string;
    id?: number;
    lat?: number;
    lon?: number;
    name?: string;
    openingTimes?: TravelCenterOpeningTimes;
    postCode?: string;
    type?: TravelCenterTypeEnum;
}
