import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpCity } from "./ipcity";
import { IpCountry } from "./ipcountry";
import { IpGeoLocation } from "./ipgeolocation";
import { IpOwner } from "./ipowner";



// IpAddressDetails
/** 
 * Provides information about the IP address of the device that an entity used to perform an action on an affected resource.
**/
export class IpAddressDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddressV4" })
  ipAddressV4?: string;

  @SpeakeasyMetadata({ data: "json, name=ipCity" })
  ipCity?: IpCity;

  @SpeakeasyMetadata({ data: "json, name=ipCountry" })
  ipCountry?: IpCountry;

  @SpeakeasyMetadata({ data: "json, name=ipGeoLocation" })
  ipGeoLocation?: IpGeoLocation;

  @SpeakeasyMetadata({ data: "json, name=ipOwner" })
  ipOwner?: IpOwner;
}
