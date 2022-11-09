import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";
import { Image } from "./image";


// CharityOrg
/** 
 * The full location, ID, logo and other details of the charity organization.
**/
export class CharityOrg extends SpeakeasyBase {
  @Metadata({ data: "json, name=charityOrgId" })
  charityOrgId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=logoImage" })
  logoImage?: Image;

  @Metadata({ data: "json, name=missionStatement" })
  missionStatement?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=registrationId" })
  registrationId?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
