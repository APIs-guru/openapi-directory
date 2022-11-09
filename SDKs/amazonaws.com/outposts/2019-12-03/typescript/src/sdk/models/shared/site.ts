import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Site
/** 
 * Information about a site.
**/
export class Site extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SiteArn" })
  siteArn?: string;

  @Metadata({ data: "json, name=SiteId" })
  siteId?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
