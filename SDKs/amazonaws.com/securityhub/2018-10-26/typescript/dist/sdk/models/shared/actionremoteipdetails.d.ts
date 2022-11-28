import { SpeakeasyBase } from "../../../internal/utils";
import { City } from "./city";
import { Country } from "./country";
import { GeoLocation } from "./geolocation";
import { IpOrganizationDetails } from "./iporganizationdetails";
/**
 * For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action.
**/
export declare class ActionRemoteIpDetails extends SpeakeasyBase {
    city?: City;
    country?: Country;
    geoLocation?: GeoLocation;
    ipAddressV4?: string;
    organization?: IpOrganizationDetails;
}
