import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaFirebaseLink
/** 
 * A link between a GA4 property and a Firebase project.
**/
export class GoogleAnalyticsAdminV1alphaFirebaseLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;
}
