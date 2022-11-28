import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaFirebaseLink
/** 
 * A link between a GA4 property and a Firebase project.
**/
export class GoogleAnalyticsAdminV1alphaFirebaseLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}


// GoogleAnalyticsAdminV1alphaFirebaseLinkInput
/** 
 * A link between a GA4 property and a Firebase project.
**/
export class GoogleAnalyticsAdminV1alphaFirebaseLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
