import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { City } from "./city";
import { Country } from "./country";
import { GeoLocation } from "./geolocation";
import { IpOrganizationDetails } from "./iporganizationdetails";



// ActionRemoteIpDetails
/** 
 * For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action.
**/
export class ActionRemoteIpDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: City;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: Country;

  @SpeakeasyMetadata({ data: "json, name=GeoLocation" })
  geoLocation?: GeoLocation;

  @SpeakeasyMetadata({ data: "json, name=IpAddressV4" })
  ipAddressV4?: string;

  @SpeakeasyMetadata({ data: "json, name=Organization" })
  organization?: IpOrganizationDetails;
}
