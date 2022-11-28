import { SpeakeasyBase } from "../../../internal/utils";
import { IpCity } from "./ipcity";
import { IpCountry } from "./ipcountry";
import { IpGeoLocation } from "./ipgeolocation";
import { IpOwner } from "./ipowner";
/**
 * Provides information about the IP address of the device that an entity used to perform an action on an affected resource.
**/
export declare class IpAddressDetails extends SpeakeasyBase {
    ipAddressV4?: string;
    ipCity?: IpCity;
    ipCountry?: IpCountry;
    ipGeoLocation?: IpGeoLocation;
    ipOwner?: IpOwner;
}
