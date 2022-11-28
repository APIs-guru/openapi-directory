import { SpeakeasyBase } from "../../../internal/utils";
export declare class CountryStats extends SpeakeasyBase {
    activeCases?: number;
    casesPerMillPop?: number;
    country: string;
    flag?: string;
    lastUpdate?: Date;
    newCases?: number;
    newDeaths?: number;
    seriousCritical?: number;
    totalCases?: number;
    totalDeaths?: number;
    totalRecovered?: string;
}
