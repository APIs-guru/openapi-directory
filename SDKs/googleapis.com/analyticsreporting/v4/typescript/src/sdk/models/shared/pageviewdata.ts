import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PageviewData
/** 
 * Represents details collected when the visitor views a page.
**/
export class PageviewData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagePath" })
  pagePath?: string;

  @SpeakeasyMetadata({ data: "json, name=pageTitle" })
  pageTitle?: string;
}
