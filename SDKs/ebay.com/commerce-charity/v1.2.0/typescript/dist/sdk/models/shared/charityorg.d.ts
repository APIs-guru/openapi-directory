import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { Image } from "./image";
/**
 * The full location, ID, logo and other details of the charity organization.
**/
export declare class CharityOrg extends SpeakeasyBase {
    charityOrgId?: string;
    description?: string;
    location?: Location;
    logoImage?: Image;
    missionStatement?: string;
    name?: string;
    registrationId?: string;
    website?: string;
}
