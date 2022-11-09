import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpCity } from "./ipcity";
import { IpCountry } from "./ipcountry";
import { IpGeoLocation } from "./ipgeolocation";
import { IpOwner } from "./ipowner";


// IpAddressDetails
/** 
 * Provides information about the IP address of the device that an entity used to perform an action on an affected resource.
**/
export class IpAddressDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddressV4" })
  ipAddressV4?: string;

  @Metadata({ data: "json, name=ipCity" })
  ipCity?: IpCity;

  @Metadata({ data: "json, name=ipCountry" })
  ipCountry?: IpCountry;

  @Metadata({ data: "json, name=ipGeoLocation" })
  ipGeoLocation?: IpGeoLocation;

  @Metadata({ data: "json, name=ipOwner" })
  ipOwner?: IpOwner;
}
