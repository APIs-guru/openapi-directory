import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PageInfo
/** 
 * Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
**/
export class PageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resultPerPage" })
  resultPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
