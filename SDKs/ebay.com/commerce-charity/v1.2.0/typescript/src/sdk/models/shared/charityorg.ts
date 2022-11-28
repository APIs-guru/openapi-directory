import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { Image } from "./image";



// CharityOrg
/** 
 * The full location, ID, logo and other details of the charity organization.
**/
export class CharityOrg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charityOrgId" })
  charityOrgId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=logoImage" })
  logoImage?: Image;

  @SpeakeasyMetadata({ data: "json, name=missionStatement" })
  missionStatement?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationId" })
  registrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
