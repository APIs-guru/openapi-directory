import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaUserLink
/** 
 * A resource message representing a user's permissions on an Account or Property resource.
**/
export class GoogleAnalyticsAdminV1alphaUserLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=directRoles" })
  directRoles?: string[];

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
