import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
**/
export declare class DataExchange extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    documentation?: string;
    icon?: string;
    listingCount?: number;
    name?: string;
    primaryContact?: string;
}
/**
 * A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
**/
export declare class DataExchangeInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    documentation?: string;
    icon?: string;
    primaryContact?: string;
}
