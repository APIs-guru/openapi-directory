import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { City } from "./city";
import { Country } from "./country";
import { GeoLocation } from "./geolocation";
import { IpOrganizationDetails } from "./iporganizationdetails";


// ActionRemoteIpDetails
/** 
 * For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action.
**/
export class ActionRemoteIpDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=City" })
  city?: City;

  @Metadata({ data: "json, name=Country" })
  country?: Country;

  @Metadata({ data: "json, name=GeoLocation" })
  geoLocation?: GeoLocation;

  @Metadata({ data: "json, name=IpAddressV4" })
  ipAddressV4?: string;

  @Metadata({ data: "json, name=Organization" })
  organization?: IpOrganizationDetails;
}
