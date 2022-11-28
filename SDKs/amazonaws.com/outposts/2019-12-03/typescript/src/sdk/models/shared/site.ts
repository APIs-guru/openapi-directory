import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Site
/** 
 * Information about a site.
**/
export class Site extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SiteArn" })
  siteArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SiteId" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
