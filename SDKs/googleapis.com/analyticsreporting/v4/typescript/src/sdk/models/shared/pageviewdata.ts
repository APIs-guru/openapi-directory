import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PageviewData
/** 
 * Represents details collected when the visitor views a page.
**/
export class PageviewData extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagePath" })
  pagePath?: string;

  @Metadata({ data: "json, name=pageTitle" })
  pageTitle?: string;
}
