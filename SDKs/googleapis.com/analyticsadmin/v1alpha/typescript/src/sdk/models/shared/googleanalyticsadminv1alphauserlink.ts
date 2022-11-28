import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaUserLink
/** 
 * A resource message representing a user's permissions on an Account or Property resource.
**/
export class GoogleAnalyticsAdminV1alphaUserLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directRoles" })
  directRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleAnalyticsAdminV1alphaUserLinkInput
/** 
 * A resource message representing a user's permissions on an Account or Property resource.
**/
export class GoogleAnalyticsAdminV1alphaUserLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directRoles" })
  directRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;
}
